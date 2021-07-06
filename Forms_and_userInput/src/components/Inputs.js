import useInput from "../hooks/use-input";

const Inputs = () => {

    const validateName = (enteredValue) => {
        return enteredValue.trim() !== ''
    }

    const validateEmail = (enteredEmail) => {
        return enteredEmail.includes('@')
    }

  const { 
        value: nameValue, 
        isValid: nameValid, 
        hasError: nameInvalid, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler, 
        reset: resetName
    } = useInput(validateName);

    const { 
        value: emailValue, 
        isValid: emailValid, 
        hasError: emailInvalid, 
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler, 
        reset: resetEmail
    } = useInput(validateEmail);

  let formIsValid = false;
    if (nameValid && emailValid) {
      formIsValid = true;
    }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!nameValid && !emailValid) {
      return;
    }
    resetName();
    resetEmail();
  }
  const nameInputClasses = nameInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInvalid ? 'form-control invalid' : 'form-control'
  const emailErrorMsg = emailInvalid && emailValue.trim() !== '' ? "Email should contain '@'" : 'Email must not be empty'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={nameValue}/>
        {nameInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue}/>
        {emailInvalid && <p className='error-text'>{emailErrorMsg}</p>}
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Inputs;
