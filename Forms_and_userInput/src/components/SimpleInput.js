import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const nameInputValid = enteredName.trim() !== ''
  const nameInputInvalid = enteredName.trim() === '' && enteredNameTouched
  const emailInputValid = enteredEmail.includes('@')
  const emailInputInvalid = !emailInputValid && enteredEmailTouched

  let formIsValid = false;
    if (nameInputValid && emailInputValid) {
      formIsValid = true;
    }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!nameInputValid && !emailInputValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }
  const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control'
  const emailErrorMsg = emailInputInvalid && enteredEmail.trim() !== '' ? "Email should contain '@'" : 'Email must not be empty'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {nameInputInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
        {emailInputInvalid && <p className='error-text'>{emailErrorMsg}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
