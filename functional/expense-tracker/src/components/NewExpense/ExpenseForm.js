import React, { useState } from 'react';
import './ExpenseForm.css';
import './NewExpense.css';

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   // const [userInput, setUserInput] = useState({
   //    enteredTitle: '',
   //    enteredAmount: '',
   //    enteredDate: '',
   // });

   const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value); //for multiple state
      // setUserInput({ ...userInput, enteredTitle: event.target.value });//multiple state handle in single state but bad practice
      //good practice is given below
      // setUserInput((prevState) => {
      //    return { ...userInput, enteredTitle: event.target.value };
      // });
   };
   const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      // setUserInput({ ...userInput, enteredAmount: event.target.value });
   };
   const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({ ...userInput, enteredDate: event.target.value });
   };

   const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
      }
      // console.log(props.onSaveExpenseData);
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');;
   }
   return (
      <form className='new-expense' onSubmit={submitHandler}>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label>Title</label>
               <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>

            <div className='new-expense__control'>
               <label>Amount</label>
               <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>

            <div className='new-expense__control'>
               <label>Date</label>
               <input type="date" min='2022-05-08' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
         </div>
         <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;