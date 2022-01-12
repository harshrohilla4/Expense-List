import ExpenseFilter from "./ExpensesFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const ChangeFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenseslist.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={ChangeFilterYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
