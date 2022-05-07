import React from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card/Card';

function ExpenseItem(props){

    return(
        <Card className="expense-item">
            <ExpenseDate fecha={props.fecha}/>
            <div className="expense-item__description">
                <h2>{props.nombre}</h2>
                <div className="expense-item__price">Precio: {props.precio}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;