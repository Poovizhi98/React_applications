import React, { useState } from 'react';
import Wrapper from '../helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredusername, setEnteredusername] = useState('');
    const [enteredage, setEnteredage] = useState(''); 
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredage.trim().length === 0 || enteredusername.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid user name and age (non-empty age)'
            })
            return;
        }
        if (+enteredage < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            })
            return;
        }
        setEnteredusername('');
        setEnteredage('');
        props.onAddUsers(enteredusername, enteredage);
    }

    const onChangeUserName = (event) => {
        setEnteredusername(event.target.value);
    }

    const onChangeAge = (event) => {
        setEnteredage(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} error={errorHandler} /> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label> 
                <input id="username" type="text" value={enteredusername} onChange={onChangeUserName}/>
                <label htmlFor="age">Age (In Years)</label> 
                <input id="age" type="number" value={enteredage} onChange={onChangeAge}/>
                <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;