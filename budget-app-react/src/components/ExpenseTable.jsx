import RemoveExpenseButton from "./RemoveExpenseButton";
import CheckBox from "./CheckBox";

export default function ExpenseTable({ listData, fetchData, checkedExpenses, setCheckedExpenses }) {

    setCheckedExpenses(listData);

    return (
        <table className="expense-table">
            <thead>
                <tr>
                    <th>Cost</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Checked</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                {listData.map((expense) => {
                    return (
                        <tr key={expense.id}>

                            <td>${expense.cost}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category.toLowerCase()}</td>
                            <td>
                                <CheckBox
                                    expense={expense}
                                    checkedExpenses={checkedExpenses}
                                    setCheckedExpenses={setCheckedExpenses}
                                />
                            </td>
                            <td>
                                <RemoveExpenseButton
                                    id={expense.id}
                                    fetchData={fetchData}
                                />
                            </td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}