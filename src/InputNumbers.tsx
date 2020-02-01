import React, { useState } from "react";

export const InputNumbers: React.FC = () => {
    const [state, setState] = useState({
        num1: "0",
        bin1: "0",
        num2: "1",
        bin2: "1"
    });

    const onChangeDec = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        compl: string
    ) => {
        e.preventDefault();
        setState({
            ...state,
            [field]: e.target.value,
            [compl]: parseInt(e.target.value, 10).toString(2)
        });
    };

    const onChangeBin = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string,
        compl: string
    ) => {
        e.preventDefault();
        setState({
            ...state,
            [field]: e.target.value,
            [compl]: parseInt(e.target.value, 2).toString(10)
        });
    };

    return (
        <form>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="decNum1">Decimal Number 1:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="decNumber1"
                        aria-describedby="decNumber1Help"
                        onChange={e => onChangeDec(e, "num1", "bin1")}
                        value={state.num1}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">Binary Number 1:</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="binNumber1"
                        onChange={e => onChangeBin(e, "bin1", "num1")}
                        value={state.bin1}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">1 &lt;&lt; Num1</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(1 << parseInt(state.num1, 10)).toString(2)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="decNum1">Decimal Number 2:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="decNumber2"
                        aria-describedby="decNumber1Help"
                        onChange={e => onChangeDec(e, "num2", "bin2")}
                        value={state.num2}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">Binary Number 2:</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="binNumber2"
                        onChange={e => onChangeBin(e, "bin2", "num2")}
                        value={state.bin2}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">1 &lt;&lt; Num2</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(1 << parseInt(state.num2, 10)).toString(2)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="binNumber1">OR: Decimal</label>
                    <input
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) | parseInt(state.num2, 10)
                        ).toString(10)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">OR: Binary</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) | parseInt(state.num2, 10)
                        ).toString(2)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">
                        Num1 | &#40;1&lt;&lt;Num2&#41;
                    </label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) |
                            (1 << parseInt(state.num2, 10))
                        ).toString(2)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="binNumber1">AND: Decimal</label>
                    <input
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) & parseInt(state.num2, 10)
                        ).toString(10)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">AND: Binary</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) & parseInt(state.num2, 10)
                        ).toString(2)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">
                        <b>Num1 & &#40;1&lt;&lt;Num2&#41; </b>
                    </label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) &
                            (1 << parseInt(state.num2, 10))
                        ).toString(2)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="binNumber1">XOR: Decimal</label>
                    <input
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) ^ parseInt(state.num2, 10)
                        ).toString(10)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">XOR: Binary</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) ^ parseInt(state.num2, 10)
                        ).toString(2)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">
                        <b>Num1 ^ &#40;1&lt;&lt;Num2&#41;</b>
                    </label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num1, 10) ^
                            (1 << parseInt(state.num2, 10))
                        ).toString(2)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label htmlFor="binNumber1">Num2 &lt;&lt; Num1: Dec</label>
                    <input
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num2, 10) << parseInt(state.num1, 10)
                        ).toString(10)}
                    />
                </div>
                <div className="form-group col">
                    <label htmlFor="binNumber1">Num2 &lt;&lt; Num1: Bin</label>
                    <input
                        style={{
                            textAlign: "right",
                            fontFamily: "Verdana, Geneva, sans-serif"
                        }}
                        type="text"
                        className="form-control"
                        id="or"
                        value={(
                            parseInt(state.num2, 10) << parseInt(state.num1, 10)
                        ).toString(2)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};
