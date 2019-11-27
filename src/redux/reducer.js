
const INC_COUNT = 'INC_COUNT'
const RESET_COUNT = 'RESET_COUNT'
const SET_COUNT = 'SET_COUNT'
const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'


const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    incorrectValue: false,
    isValuesSet: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNT: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case RESET_COUNT: {
            return {
                ...state,
                count: state.startValue
            }
        }
        case SET_COUNT: {
            return {
                ...state,
                count: state.startValue,
                maxValue: state.maxValue,
                isValuesSet: true
            }
        }
        case CHANGE_START_VALUE:
            if (action.number >= state.maxValue || action.number < 0) {
                return {
                    ...state,
                    isValuesSet: false,
                    startValue: state.maxValue,
                    incorrectValue: true
                }
            } else {
                return {
                    ...state,
                    isValuesSet: false,
                    startValue: action.number,
                    incorrectValue: false
                }
            }
        case CHANGE_MAX_VALUE:
            if (action.number <= state.startValue || action.number < 0) {
                return {
                    ...state,
                    isValuesSet: false,
                    maxValue: state.startValue,
                    incorrectValue: true
                }
            } else {
                return {
                    ...state,
                    isValuesSet: false,
                    maxValue: action.number,
                    incorrectValue: false
                }
            }
        default: return state
    }
}

export default reducer;

export const incCount = () => ({ type: INC_COUNT });
export const resetCount = () => ({ type: RESET_COUNT });
export const setCount = () => ({ type: SET_COUNT });
export const changeStartValue = (number) => ({ type: CHANGE_START_VALUE, number: +number });
export const changeMaxValue = (number) => ({ type: CHANGE_MAX_VALUE, number: +number });

