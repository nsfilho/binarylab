import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { InputNumbers } from './InputNumbers';
import { BinaryTable } from './BinaryTable';
import { Macros } from './Macros';
import { NavBar } from './NavBar';
import './App.css';

const App = () => {
    const [view, setView] = useState('conversion');

    return (
        <DndProvider backend={Backend}>
            <div className="container">
                <NavBar setView={setView} />
                {view === 'conversion' && (
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-2"></div>
                        <div className="col">
                            <InputNumbers />
                        </div>
                        <div className="col-2"></div>
                    </div>
                )}
                {view === 'macro' && (
                    <div className="row codeBlock">
                        <div className="col"></div>
                        <div className="col">
                            <Macros />
                        </div>
                        <div className="col"></div>
                    </div>
                )}
                {view === 'table' && (
                    <>
                        <BinaryTable start={0} count={80} />
                        <BinaryTable start={80} count={80} />
                        <BinaryTable start={160} count={95} />
                    </>
                )}
            </div>
        </DndProvider>
    );
};

export default App;
