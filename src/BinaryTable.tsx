import React, { useEffect } from "react";
import "./BinaryTable.css";

const definedStrong = [1, 2, 4, 8, 16, 32, 64, 128];
const strongNum = (num: number) =>
    definedStrong.includes(num) ? <b>{num}</b> : num.toString();

interface BinaryProps {
    start: number;
    count: number;
}

export const BinaryTable: React.FC<BinaryProps> = ({ start, count }) => {
    const columnsSize = Math.ceil(count / 5);
    return (
        <div className="row" style={{ marginTop: "20px" }}>
            <BinaryItem start={start} count={columnsSize} />
            <BinaryItem start={start + columnsSize} count={columnsSize} />
            <BinaryItem start={start + columnsSize * 2} count={columnsSize} />
            <BinaryItem start={start + columnsSize * 3} count={columnsSize} />
            <BinaryItem start={start + columnsSize * 4} count={columnsSize} />
        </div>
    );
};

export const BinaryItem: React.FC<BinaryProps> = ({ start, count }) => {
    const arrayTable: Array<{ num: string; bin: string; x: number }> = [];
    for (let x = start; x < start + count; x++) {
        arrayTable.push({
            x,
            num: x.toString(10),
            bin: x.toString(2)
        });
    }

    return (
        <div className="col">
            <table className="table-striped myTable">
                <thead>
                    <tr>
                        <td>Decimal</td>
                        <td className="myTd">Binary</td>
                    </tr>
                </thead>
                <tbody>
                    {arrayTable.map(v => (
                        <tr key={v.num}>
                            <td className="myTd">{strongNum(v.x)}</td>
                            <td className="myTd">{v.bin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
