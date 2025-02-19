import { useState } from "react";

export default function Totals({ checkedExpenses }) {

    let total = 0;

    for (let i = 0; i < checkedExpenses.length; i++) {
        total += checkedExpenses[i].cost;
    }

    return (
        <div>
            <h3>Total Expenses: ＄{total}</h3>
        </div>
    );
}