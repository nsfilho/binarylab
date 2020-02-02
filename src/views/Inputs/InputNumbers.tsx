import React from 'react';
import { InputCalcs, InputStd } from './';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store';
import { InputActionCreators } from '../../store/ducks';

export const InputNumbers: React.FC = () => {
    const state = useSelector((state: State) => state.inputs);
    const dispatch = useDispatch();

    const onChange = (bin: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const propName = e.target.id.split('_')[1];
        dispatch(InputActionCreators.set(propName, bin, e.target.value));
    };

    return (
        <form>
            <div className="form-row">
                <InputStd
                    id="dec_num1"
                    label="Decimal Number 1:"
                    onChange={onChange(false)}
                    value={state.decimal.num1}
                />
                <InputStd
                    id="bin_num1"
                    binary
                    label="Binary Number 1:"
                    onChange={onChange(true)}
                    value={state.binary.num1}
                />
                <InputStd
                    id="shift1"
                    binary
                    label="1 << Num1"
                    value={(1 << parseInt(state.decimal.num1, 10)).toString(2)}
                />
            </div>
            <div className="form-row">
                <InputStd
                    id="dec_num2"
                    label="Decimal Number 2:"
                    onChange={onChange(false)}
                    value={state.decimal.num2}
                />
                <InputStd
                    id="bin_num2"
                    binary
                    label="Binary Number 2:"
                    onChange={onChange(true)}
                    value={state.binary.num2}
                />
                <InputStd
                    id="shift2"
                    binary
                    label="1 << Num2"
                    value={(1 << parseInt(state.decimal.num2, 10)).toString(2)}
                />
            </div>
            <InputCalcs />
        </form>
    );
};
