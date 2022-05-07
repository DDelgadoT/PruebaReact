import React from "react";
import './ExpenseDate.css';

function ExpenseDate(props){

    const fecha = props.fecha;
    const año = fecha.getFullYear();
    const mes = fecha.toLocaleString("en-US", {month: "long"});
    const dia = fecha.toLocaleString("en-US", {day: "2-digit"});

    return(
        <div className="expense-date">
            <div className="expense-date__year">{año}</div>
            <div className="expense-date__month">{mes}</div>
            <div className="expense-date__day">{dia}</div>
        </div>
    );
}

export default ExpenseDate;