import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Backend from 'react-dnd-html5-backend';
import { BinaryTable } from './views/BinaryTable';
import { InputNumbers } from './views/Inputs';
import { Macros } from './views/Macros';
import { NavBar } from './components/NavBar';
import { store, history } from './store';
import './App.css';

const App = () => {
    const [view, setView] = useState('conversion');

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
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
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
