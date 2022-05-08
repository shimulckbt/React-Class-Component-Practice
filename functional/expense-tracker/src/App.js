import Expenses from './components/Expenses';
import './App.css';

function App() {
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 3000, date: new Date(2022, 5, 8) },
    { id: 2, title: 'Home Insurance', amount: 13000, date: new Date(2022, 3, 22) },
    { id: 3, title: 'Education Insurance', amount: 4000, date: new Date(2022, 2, 1) },
    { id: 4, title: 'Health Insurance', amount: 6000, date: new Date(2022, 1, 15) },
  ];
  return (
    <div className='App'>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
