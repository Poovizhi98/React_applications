import React, { useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
            return {
                focus: activate
            };
        });

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}>          
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.name}
                ref={inputRef}
                id={props.name}
                value={props.value}
                onChange={props.onChangeHandler}
                onBlur={props.onValidateHandler}
            />  
        </div>
    );
});

export default Input;