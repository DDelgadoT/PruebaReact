import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    return(
        <div className="NewExpense">
            <ExpenseForm/>
        </div>
    );
}

export default NewExpense;