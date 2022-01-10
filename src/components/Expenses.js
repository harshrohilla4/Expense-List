import ExpenseItem from "./ExpenseItem";
import Card from "./Card"
import "./Expenses.css"
function Expenses(props)
{
    return( <Card className="expenses"><ExpenseItem
        title= {props.expenseslist[0].title} 
        date={props.expenseslist[0].date}
        amount={props.expenseslist[0].amount}
        />
        <ExpenseItem
        title= {props.expenseslist[1].title} 
        date={props.expenseslist[1].date}
        amount={props.expenseslist[1].amount}
        />
        <ExpenseItem
        title= {props.expenseslist[2].title} 
        date={props.expenseslist[2].date}
        amount={props.expenseslist[2].amount}
        />
        <ExpenseItem
        title= {props.expenseslist[3].title} 
        date={props.expenseslist[3].date}
        amount={props.expenseslist[3].amount}
        />
        </Card>)
}

export default Expenses;