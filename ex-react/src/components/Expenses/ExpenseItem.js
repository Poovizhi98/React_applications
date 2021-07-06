import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const changeHandler = () => {
        setTitle('Updated!')
        console.log(title, 'title')
    }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={changeHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;