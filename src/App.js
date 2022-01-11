
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
 
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Bike Service',
      amount: 3260,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New Headphone', amount: 1200, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 5000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New table (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
      const AddExpenseHandler=(expense)=>{
        console.log("In App.js");
        console.log(expense);
      };
      
  return (
    <div>
      <h2>My first react based UI</h2>
      <NewExpense onAddExpense={AddExpenseHandler}/>
      <Expenses expenseslist={expenses}/>
    </div>
  );
}

export default App;
