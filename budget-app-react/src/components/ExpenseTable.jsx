import { useEffect } from "react";
import RemoveExpenseButton from "./RemoveExpenseButton";
import CheckBox from "./CheckBox";

export default function ExpenseTable({ listData, fetchData, checkedExpenses, setCheckedExpenses }) {

    // Infinite loop avoided by not calling fetchData here but instead in parent
    useEffect(() => {
        setCheckedExpenses(listData);
    }, [listData])

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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
                            <td>{toTitleCase(expense.description)}</td>
                            <td>{toTitleCase(expense.category.toLowerCase())}</td>
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