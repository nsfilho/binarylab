import React from 'react';

interface NavBarProps {
    setView: (view: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ setView }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#conversion" className="navbar-brand" onClick={e => setView('conversion')}>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#conversion" onClick={e => setView('conversion')}>
                        Conversion
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#macro" onClick={e => setView('macro')}>
                        Macro
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#table" onClick={e => setView('table')}>
                        Table
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);
