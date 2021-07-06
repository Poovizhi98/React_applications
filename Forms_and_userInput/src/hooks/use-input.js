import { useReducer } from 'react';

  const initialState = {
      value : '',
      isTouched: false
  }
  const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {
      return {
        value: action.value,
        isTouched: state.isTouched
      }
    }
    if (action.type === 'BLUR') {
      return {
        value: state.value,
        isTouched: true
      }
    }
    if (action.type === 'RESET') {
      return {
        value: '',
        isTouched: false
      }
    }
    return initialState;
  }
const useInput = (validateValue) => {

  const [valueState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validateValue(valueState.value);
  const hasError = !valueIsValid && valueState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type:'INPUT', value: event.target.value })
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  };

  const reset = () => {
    dispatch({ type: 'RESET' })
  };

  return {
    value: valueState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;