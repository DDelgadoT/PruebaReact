import './App.css';
import Expenses from './components/Expense/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: "01",
      title: "Yuca",
      date: new Date(2022,4,7),
      amount: 500
    },
    {
      id: "02",
      title: "Leche",
      date: new Date(2022,4,7),
      amount: 3000
    },
    {
      id: "03",
      title: "Manzana",
      date: new Date(2022,4,7),
      amount: 1500
    }
  ];

  return (
    <div className="App">
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
