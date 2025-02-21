import { useState } from "react";

export default function Totals({ checkedExpenses, incomeData }) {

    let expenseTotal = 0;

    for (let i = 0; i < checkedExpenses.length; i++) {
        expenseTotal += checkedExpenses[i].amount;
    }

    let incomeTotal = 0;

    for (let i = 0; i < incomeData.length; i++) {
        incomeTotal += incomeData[i].amount;
    }

    return (
        <div>
            <h3>Total Income: ${incomeTotal}</h3>
            <h3>Total Expenses: ${expenseTotal}</h3>
            <h3>Difference: ${incomeTotal - expenseTotal}</h3>
        </div>
    );
}