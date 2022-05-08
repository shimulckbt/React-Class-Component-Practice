import './ExpenseForm.css';
import './NewExpense.css';

const ExpenseForm = () => {
   return (
      <form className='new-expense'>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label>Title</label>
               <input type="text" />
            </div>

            <div className='new-expense__control'>
               <label>Amount</label>
               <input type='number' min='0.01' step='0.01' />
            </div>

            <div className='new-expense__control'>
               <label>Date</label>
               <input type="date" min='2022-05-08' max='2024-12-31' />
            </div>
         </div>
         <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;