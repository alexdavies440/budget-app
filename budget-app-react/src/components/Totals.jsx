
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
            <h3>Total Allocated: ${allocationTotal}</h3>
            <h3>Total Expenses: ${expenseTotal}</h3>
            <h3>Difference: ${allocationTotal - expenseTotal}</h3>
        </div>
    );
}