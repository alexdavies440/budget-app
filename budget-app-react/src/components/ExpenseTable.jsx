import { useEffect } from "react";
import RemoveExpenseButton from "./RemoveExpenseButton";
import CheckBox from "./CheckBox";
import RemoveButton from "./RemoveButton";

export default function ExpenseTable({ toTitleCase, expenseData, fetchExpenseData, checkedExpenses, setCheckedExpenses }) {

    // Infinite loop avoided by not calling fetchData here but instead in parent
    useEffect(() => {
        setCheckedExpenses(expenseData);
    }, [expenseData])

    return (
        <table className="expense-table">
            <thead>
                <tr>
                    <h3>Expenses</h3>
                </tr>
                <tr>
                    <th>Cost</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Include in Total</th>
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
                                    expense={expense}
                                    checkedExpenses={checkedExpenses}
                                    setCheckedExpenses={setCheckedExpenses}
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
    );
}