import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isAdd, setIsAdd] = useState(false)

    const onAddHandler = () => {
        setIsAdd(true);
    }

    const onCancel = () => {
        setIsAdd(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

  return (
    <div className='new-expense'>
        { !isAdd && <button type='button' onClick={onAddHandler}>Add New Expense</button> }
        { isAdd && <ExpenseForm onCancel={onCancel} onSaveExpenseData={saveExpenseDataHandler} /> }
    </div>
  );
};

export default NewExpense;