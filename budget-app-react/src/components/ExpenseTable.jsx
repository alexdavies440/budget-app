import RemoveExpenseButton from "./RemoveExpenseButton";

export default function ExpenseTable({ listData, fetchData }) {

    return (
        <table className="expense-table">
            <tr>
                <th>Cost</th>
                <th>Description</th>
                <th>Category</th>
                <th>Checked</th>
                <th>Remove</th>
            </tr>

            {listData.map((expense) => {
                return (
                    <tr key={expense.id}>
                    
                        <td>${expense.cost}</td>
                        <td>{expense.description}</td>
                        <td>{expense.category.toLowerCase()}</td>
                        <td>{String(expense.isChecked)}</td>
                        <td>
                            <RemoveExpenseButton
                                id={expense.id}
                                fetchData={fetchData}
                            />
                        </td>

                    </tr>
                );
            })}
        </table>
    );
}