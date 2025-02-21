import { useEffect } from "react";
import CheckBox from "./CheckBox";
import RemoveButton from "./RemoveButton";

export default function ExpenseTable({ toTitleCase, expenseData, fetchExpenseData, checkedExpenses, setCheckedExpenses }) {

    // Infinite loop avoided by not calling fetchData here but instead in parent
    useEffect(() => {
        setCheckedExpenses(expenseData);
    }, [expenseData])

    return (
        <div>
            <h2>Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cost</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Include</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {expenseData.map((expense) => {
                        return (
                            <tr key={expense.id}>

                                <td>${expense.amount}</td>
                                <td>{toTitleCase(expense.description)}</td>
                                <td>{toTitleCase(expense.category.toLowerCase())}</td>
                                <td>
                                    <CheckBox
                                        item={expense}
                                        checkedItems={checkedExpenses}
                                        setCheckedItems={setCheckedExpenses}
                                    />
                                </td>
                                <td>
                                    <RemoveButton
                                        deleteUrl={'http://localhost:8080/delete-expense/'}
                                        id={expense.id}
                                        fetchData={fetchExpenseData}
                                    />
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}