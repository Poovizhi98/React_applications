import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import styled from 'styled-components';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props=> (props.invalid && 'red')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=> (props.invalid ? 'red' : '#ccc')};
//   background-color: ${props=> (props.invalid && 'rgb(235, 147, 147)')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// &.invalid label {
//   color : red;
// }

// &.invalid input {
//   color: red;
//   border-color: rgb(235, 147, 147);
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsvalid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsvalid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'}> */}
      {/* <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`} > */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label 
        // style={{ color: !isValid ? 'red' : 'black' }}
        >Course Goal</label>
        <input type="text" 
        // style={{ borderColor: !isValid ? 'red' : 'black', 
        //          background: !isValid ? 'salmon' : 'transparent' }} 
        onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
