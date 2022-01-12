
import { STATES } from "mongoose";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm"


import "./NewExpense.css"

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
         
       const expenseData={
           ...enteredExpenseData,
           id:Math.random.toString()
       };
       props.onAddExpense(expenseData);
       setIsAdding(false);
    };
            const[isAdding,setIsAdding]=useState(false);
 
        const addingExpense=()=>{
            setIsAdding(true);
        }
        const cancelAdding=()=>{
            setIsAdding(false);
        }
    return (
        <div className="new-expense">
         {!isAdding && <button onClick={addingExpense}>Add New Expense</button>}
         { isAdding &&  <ExpenseForm onCancel={cancelAdding} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>       
    );
};

export default NewExpense