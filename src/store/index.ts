import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware, RouterRootState } from 'connected-react-router';
import { reducer as formReducer, FormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { InputReducer, InputsState } from './ducks';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

export interface State {
    readonly form: FormReducer;
    readonly router: RouterRootState;
    readonly inputs: InputsState;
}

export const history: History = createBrowserHistory();
export const store = createStore(
    combineReducers({
        form: formReducer,
        router: connectRouter(history),
        inputs: InputReducer
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
);
