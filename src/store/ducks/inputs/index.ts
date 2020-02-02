// #region State

/** Definição do Estado da aplicação */
export interface InputsState {
    binary: {
        num1: string;
        num2: string;
    };
    decimal: {
        num1: string;
        num2: string;
    };
}

/** A inicialização de dados (momento 0) */
const defaultInputState: InputsState = {
    binary: {
        num1: '0',
        num2: '1'
    },
    decimal: {
        num1: '0',
        num2: '1'
    }
};

// #endregion

// #region Actions

/** Tipos de Ações Previstas */
export enum InputActionTypes {
    SET = '@inputs/set'
}

/** Payload da ActionType: SET */
interface InputActionSet {
    type: typeof InputActionTypes.SET;
    field: string;
    binary: boolean;
    value: string;
}

export type InputActions = InputActionSet;

export interface InputActionCreatorsType {
    set: (field: string, binary: boolean, value: string) => InputActionSet;
}

export const InputActionCreators: InputActionCreatorsType = {
    set: (field, binary, value) => ({ type: InputActionTypes.SET, field, binary, value })
};

// #endregion

// #region Reducer

export const InputReducer = (state: InputsState = defaultInputState, action: InputActions) => {
    switch (action.type) {
        case InputActionTypes.SET:
            return {
                binary: {
                    ...state.binary,
                    [action.field]: action.binary ? action.value : parseInt(action.value, 10).toString(2)
                },
                decimal: {
                    ...state.decimal,
                    [action.field]: action.binary ? parseInt(action.value, 2).toString(10) : action.value
                }
            };
        default:
            return state;
    }
};

// #endregion
