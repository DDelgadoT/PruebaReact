import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
        <div>
            <ExpenseItem 
            nombre={props.items[0].title}
            fecha={props.items[0].date}
            precio={props.items[0].amount}/>
            <ExpenseItem 
            nombre={props.items[1].title}
            fecha={props.items[1].date}
            precio={props.items[1].amount}/>
            <ExpenseItem 
            nombre={props.items[2].title}
            fecha={props.items[2].date}
            precio={props.items[2].amount}/>
        </div>
    );
}

export default Expenses;