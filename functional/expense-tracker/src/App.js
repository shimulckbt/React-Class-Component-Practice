import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import './App.css';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 1, title: 'Car Insurance', amount: 3000, date: new Date(2022, 5, 8) },
  { id: 2, title: 'Home Insurance', amount: 13000, date: new Date(2022, 3, 22) },
  { id: 3, title: 'Education Insurance', amount: 4000, date: new Date(2022, 2, 1) },
  { id: 4, title: 'Health Insurance', amount: 6000, date: new Date(2022, 1, 15) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
