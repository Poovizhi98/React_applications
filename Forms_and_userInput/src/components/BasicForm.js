import useInput from "../hooks/use-input";

const BasicForm = () => {

  const validateFirstName = (value) => {
    return value.trim() !== '';
  }

  const validateEmail = (value) => {
    return value.includes('@');
  }
  
    const {
      value: firstName,
      isValid: firstNameValid,
      hasError: firstNameInvalid,
      valueChangeHandler: firstNameChangeHandler,
      inputBlurHandler: firstNameBlurHandler,
      reset: firstNameReset
    } = useInput(validateFirstName);
    const {
      value: lastName,
      isValid: lastNameValid,
      hasError: lastNameInvalid,
      valueChangeHandler: lastNameChangeHandler,
      inputBlurHandler: lastNameBlurHandler,
      reset: lastNameReset
    } = useInput(validateFirstName);
    const {
      value: emailValue,
      isValid: emailValid,
      hasError: emailInvalid,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: emailReset
    } = useInput(validateEmail);

    let formIsValid = false;
    if (firstNameValid && lastNameValid && emailValid) {
      formIsValid = true;
    }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameValid && !lastNameValid && !emailValid) {
      return;
    }
    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameInputClasses = firstNameInvalid ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInvalid ? 'form-control invalid' : 'form-control'
  const emailErrorMsg = emailInvalid && emailValue.trim() !== '' ? "Email should contain '@'" : 'Email must not be empty'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName}/>
          {firstNameInvalid && <p className='error-text'>First Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
          {lastNameInvalid && <p className='error-text'>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue} />
        {emailInvalid && <p className='error-text'>{emailErrorMsg}</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
