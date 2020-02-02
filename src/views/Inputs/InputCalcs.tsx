import React, { useState } from 'react';
import { InputGroup, InputStd } from './';
import { useSelector } from 'react-redux';
import { State } from '../../store';

interface InputCalcsProps {}

interface Row {
    order: number;
    name: string;
    render: (num1: number, num2: number) => JSX.Element;
}

export const InputCalcs: React.FC<InputCalcsProps> = () => {
    const decimal = useSelector((state: State) => state.inputs.decimal);
    const m_num1 = parseInt(decimal.num1, 10);
    const m_num2 = parseInt(decimal.num2, 10);
    const [rows, setRows] = useState<Row[]>([
        {
            order: 0,
            name: 'or',
            render: (num1, num2) => (
                <>
                    <InputStd id="ordec" label="OR: Decimal" value={(num1 | num2).toString(10)} />
                    <InputStd id="orbin" binary label="OR: Binary" value={(num1 | num2).toString(2)} />
                    <InputStd
                        id="shiftorbin"
                        binary
                        label="Num1 | (1 << Num2)"
                        value={(num1 | (1 << num2)).toString(2)}
                    />
                </>
            )
        },
        {
            order: 1,
            name: 'and',
            render: (num1, num2) => (
                <>
                    <InputStd id="anddec" label="AND: Decimal" value={(num1 & num2).toString(10)} />
                    <InputStd id="andbin" binary label="AND: Binary" value={(num1 & num2).toString(2)} />
                    <InputStd
                        id="shiftandbin"
                        binary
                        label="Num1 & (1 << Num2)"
                        value={(num1 & (1 << num2)).toString(2)}
                    />
                </>
            )
        },
        {
            order: 2,
            name: 'xor',
            render: (num1, num2) => (
                <>
                    <InputStd id="xordec" label="XOR: Decimal" value={(num1 ^ num2).toString(10)} />
                    <InputStd id="xorbin" binary label="XOR: Binary" value={(num1 ^ num2).toString(2)} />
                    <InputStd
                        id="shiftxorbin"
                        binary
                        label="Num1 ^ (1 << Num2)"
                        value={(num1 ^ (1 << num2)).toString(2)}
                    />
                </>
            )
        },
        {
            order: 3,
            name: 'shift',
            render: (num1, num2) => (
                <>
                    <InputStd id="shift2by1dec" label="Num2 << Num1: Decimal" value={(num2 << num1).toString(10)} />
                    <InputStd
                        id="shift2by1bin"
                        label="Num2 << Num1: Binary"
                        binary
                        value={(num2 << num1).toString(2)}
                    />
                </>
            )
        }
    ]);

    const moveGroup = (source: string, to: string) => {
        if (source === to) return;
        const sourceItem = rows.find(i => i.name === source) as Row;
        let ajust: number = 0;
        let updatedRows: Row[] = [];
        rows.forEach((i, x) => {
            if (i.name === to) {
                ajust += 1;
                if (i.order > sourceItem.order) {
                    updatedRows.push({ ...i, order: x });
                    updatedRows.push({ ...sourceItem, order: x + ajust });
                    return;
                } else updatedRows.push({ ...sourceItem, order: x });
            } else if (i.name === source) {
                ajust -= 1;
                return;
            }
            updatedRows.push({ ...i, order: x + ajust });
        });
        setRows(updatedRows);
    };

    return (
        <>
            {rows
                .sort((a, b) => a.order - b.order)
                .map(item => (
                    <InputGroup key={item.name} name={item.name} moveGroup={moveGroup}>
                        {item.render(m_num1, m_num2)}
                    </InputGroup>
                ))}
        </>
    );
};
