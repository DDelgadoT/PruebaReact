import React from "react";
import './ExpenseForm.css';

function ExpenseForm(){

    const titulo = "Manzana";

    return(
        <div>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Nombre</label>
                        <input type="text" value={titulo}></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Costo</label>
                        <input type="number"></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Fecha</label>
                        <input type="date"></input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;