import React, { useState } from 'react';
import { InputCalcs } from './InputCalcs';

interface InputStdProps {
    id: string;
    label: string;
    value: string;
    binary?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputStd: React.FC<InputStdProps> = ({ id, label, onChange, value, binary }) => {
    const styled: React.CSSProperties = binary ? { textAlign: 'right' } : {};
    const fillBinary = (value: string, size: number = 8) =>
        value.length < size ? '0'.repeat(size - value.length) + value : value;

    return (
        <div className="form-group col">
            <label htmlFor={id}>{label}</label>
            <input
                style={{ fontFamily: 'Verdana, Geneva, sans-serif', ...styled }}
                type="text"
                className="form-control"
                id={id}
                onChange={e => (onChange ? onChange(e) : undefined)}
                value={binary ? fillBinary(value) : value}
            />
        </div>
    );
};

InputStd.defaultProps = {
    binary: false
};

export const InputNumbers: React.FC = () => {
    const [stateDec, setStateDec] = useState({ num1: '0', num2: '1' });
    const [stateBin, setStateBin] = useState({ num1: '0', num2: '1' });

    const onChange = (bin: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const propName = e.target.id.split('_')[1];
        e.preventDefault();
        setStateDec({
            ...stateDec,
            [propName]: bin ? parseInt(e.target.value, 2).toString(10) : e.target.value
        });
        setStateBin({
            ...stateBin,
            [propName]: bin ? e.target.value : parseInt(e.target.value, 10).toString(2)
        });
    };

    return (
        <form>
            <div className="form-row">
                <InputStd id="dec_num1" label="Decimal Number 1:" onChange={onChange(false)} value={stateDec.num1} />
                <InputStd
                    id="bin_num1"
                    binary
                    label="Binary Number 1:"
                    onChange={onChange(true)}
                    value={stateBin.num1}
                />
                <InputStd id="shift1" binary label="1 << Num1" value={(1 << parseInt(stateDec.num1, 10)).toString(2)} />
            </div>
            <div className="form-row">
                <InputStd id="dec_num2" label="Decimal Number 2:" onChange={onChange(false)} value={stateDec.num2} />
                <InputStd
                    id="bin_num2"
                    binary
                    label="Binary Number 2:"
                    onChange={onChange(true)}
                    value={stateBin.num2}
                />
                <InputStd id="shift2" binary label="1 << Num2" value={(1 << parseInt(stateDec.num2, 10)).toString(2)} />
            </div>
            <InputCalcs num1={parseInt(stateDec.num1, 10)} num2={parseInt(stateDec.num2, 10)} />
        </form>
    );
};
