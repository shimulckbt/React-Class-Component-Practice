import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
   let expensesContent = props.items.map(expense => (
      <ExpenseItem
         key={expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
      />));
   if (props.items.length === 0) {
      return <ht className="expenses-list__fallback">Found no expensea</ht>;
   }
   return (
      <ul className="expenses-list">
         {expensesContent}
      </ul>
   );
};

export default ExpensesList;