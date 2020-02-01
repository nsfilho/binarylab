import React from "react";
import "./App.css";
import { InputNumbers } from "./InputNumbers";
import { BinaryTable } from "./BinaryTable";

const App = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Binary Lab
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Conversion
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Table
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-2"></div>
                <div className="col">
                    <InputNumbers />
                </div>
                <div className="col-2"></div>
            </div>
            <BinaryTable start={0} count={80} />
            <BinaryTable start={80} count={80} />
            <BinaryTable start={160} count={95} />
        </div>
    );
};

export default App;
