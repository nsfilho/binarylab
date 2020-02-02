import React, { useState } from 'react';
import { InputGroup } from './InputGroup';
import { InputStd } from './InputNumbers';

interface InputCalcsProps {
    num1: number;
    num2: number;
}

interface Row {
    order: number;
    name: string;
    render: JSX.Element;
}

export const InputCalcs: React.FC<InputCalcsProps> = ({ num1, num2 }) => {
    const [rows, setRows] = useState<Row[]>([
        {
            order: 1,
            name: 'or',
            render: (
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
            order: 2,
            name: 'and',
            render: (
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
            order: 3,
            name: 'xor',
            render: (
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
            order: 4,
            name: 'shift',
            render: (
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
        const sourceItem = rows.find(i => i.name === source) as Row;
        let find: boolean = false;
        let updatedRows: Row[] = [];
        rows.forEach((i, x) => {
            if (i.name === to) {
                if (i.order > sourceItem.order) {
                    updatedRows.push(i);
                    updatedRows.push({ ...sourceItem, order: x + 1 });
                    return;
                } else updatedRows.push({ ...sourceItem, order: x });
                find = true;
            } else if (i.name === source) return;
            updatedRows.push({ ...i, order: i.order + (find ? 1 : 0) });
        });
        setRows(updatedRows);
    };

    return (
        <>
            {rows
                .sort((a, b) => a.order - b.order)
                .map(item => (
                    <InputGroup key={item.name} name={item.name} moveGroup={moveGroup}>
                        {item.render}
                    </InputGroup>
                ))}
        </>
    );
};
