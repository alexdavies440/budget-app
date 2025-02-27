
export default function Totals({ checkedExpenses, checkedAllocations }) {

    let expenseTotal = 0;

    for (let i = 0; i < checkedExpenses.length; i++) {
        expenseTotal += checkedExpenses[i].amount;
    }

    let allocationTotal = 0;

    for (let i = 0; i < checkedAllocations.length; i++) {
        allocationTotal += checkedAllocations[i].amount;
    }

    return (
        <div>
            <h3>Total Allocated: $
                {Math.round((allocationTotal) * 100) / 100}
            </h3>
            <h3>Total Expenses: $
                {Math.round((expenseTotal) * 100) / 100}
            </h3>
            <h3>Difference: $
                {Math.round((allocationTotal - expenseTotal) * 100) / 100}
            </h3>
        </div>
    );
}