import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const filterYearHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredItem = props.items.filter(expense => (expense.date.getFullYear()).toString() === selectedYear)

  return (
    <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onFilterYear={filterYearHandler}/>
        <ExpensesChart expenses={filteredItem} />
        <ExpensesList items={filteredItem} />
    </Card>
  );
}

export default Expenses;