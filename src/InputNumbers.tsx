import React, { useState } from 'react';

interface InputStdProps {
    id: string;
    label: string;
    value: string | number;
    binary?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

export const InputStd: React.FC<InputStdProps> = ({ id, label, onChange, value, binary }) => {
    const styled: React.CSSProperties = binary
        ? {
              textAlign: 'right',
              fontFamily: 'Verdana, Geneva, sans-serif'
          }
        : {};
    return (
        <div className="form-group col">
            <label htmlFor={id}>{label}</label>
            <input
                style={styled}
                type="text"
                className="form-control"
                id={id}
                onChange={e => (onChange ? onChange(e, id) : undefined)}
                value={value}
            />
        </div>
    );
};

InputStd.defaultProps = {
    binary: false
};

export const InputNumbers: React.FC = () => {
    const [stateDec, setStateDec] = useState({
        num1: '0',
        num2: '1'
    });

    const [stateBin, setStateBin] = useState({
        num1: '0',
        num2: '1'
    });

    const onChange = (bin: boolean) => (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        e.preventDefault();
        setStateDec({
            ...stateDec,
            [e.target.id]: bin ? parseInt(e.target.value, 2).toString(10) : e.target.value
        });
        setStateBin({
            ...stateBin,
            [e.target.id]: bin ? e.target.value : parseInt(e.target.value, 10).toString(2)
        });
    };

    return (
        <form>
            <div className="form-row">
                <InputStd id="num1" label="Decimal Number 1:" onChange={onChange(false)} value={stateDec.num1} />
                <InputStd id="num1" binary label="Binary Number 1:" onChange={onChange(true)} value={stateBin.num1} />
                <InputStd id="shift1" binary label="1 << Num1" value={(1 << parseInt(stateDec.num1, 10)).toString(2)} />
            </div>
            <div className="form-row">
                <InputStd id="num2" label="Decimal Number 2:" onChange={onChange(false)} value={stateDec.num2} />
                <InputStd id="num2" binary label="Binary Number 2:" onChange={onChange(true)} value={stateBin.num2} />
                <InputStd id="shift2" binary label="1 << Num2" value={(1 << parseInt(stateDec.num2, 10)).toString(2)} />
            </div>
            <div className="form-row">
                <InputStd
                    id="ordec"
                    label="OR: Decimal"
                    value={(parseInt(stateDec.num1, 10) | parseInt(stateDec.num2, 10)).toString(10)}
                />
                <InputStd
                    id="orbin"
                    binary
                    label="OR: Binary"
                    value={(parseInt(stateDec.num1, 10) | parseInt(stateDec.num2, 10)).toString(2)}
                />
                <InputStd
                    id="shiftorbin"
                    binary
                    label="Num1 | (1 << Num2)"
                    value={(parseInt(stateDec.num1, 10) | (1 << parseInt(stateDec.num2, 10))).toString(2)}
                />
            </div>
            <div className="form-row">
                <InputStd
                    id="anddec"
                    label="AND: Decimal"
                    value={(parseInt(stateDec.num1, 10) & parseInt(stateDec.num2, 10)).toString(10)}
                />
                <InputStd
                    id="andbin"
                    binary
                    label="AND: Binary"
                    value={(parseInt(stateDec.num1, 10) & parseInt(stateDec.num2, 10)).toString(2)}
                />
                <InputStd
                    id="shiftandbin"
                    binary
                    label="Num1 & (1 << Num2)"
                    value={(parseInt(stateDec.num1, 10) & (1 << parseInt(stateDec.num2, 10))).toString(2)}
                />
            </div>
            <div className="form-row">
                <InputStd
                    id="xordec"
                    label="XOR: Decimal"
                    value={(parseInt(stateDec.num1, 10) ^ parseInt(stateDec.num2, 10)).toString(10)}
                />
                <InputStd
                    id="xorbin"
                    binary
                    label="XOR: Binary"
                    value={(parseInt(stateDec.num1, 10) ^ parseInt(stateDec.num2, 10)).toString(2)}
                />
                <InputStd
                    id="shiftxorbin"
                    binary
                    label="Num1 ^ (1 << Num2)"
                    value={(parseInt(stateDec.num1, 10) ^ (1 << parseInt(stateDec.num2, 10))).toString(2)}
                />
            </div>
            <div className="form-row">
                <InputStd
                    id="shift2by1dec"
                    label="Num2 << Num1: Decimal"
                    value={(parseInt(stateDec.num2, 10) << parseInt(stateDec.num1, 10)).toString(10)}
                />
                <InputStd
                    id="shift2by1bin"
                    label="Num2 << Num1: Binary"
                    binary
                    value={(parseInt(stateDec.num2, 10) << parseInt(stateDec.num1, 10)).toString(2)}
                />
            </div>
        </form>
    );
};
