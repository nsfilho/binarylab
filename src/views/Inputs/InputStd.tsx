import React from 'react';

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
