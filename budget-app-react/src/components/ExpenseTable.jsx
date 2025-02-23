import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";
import EditForm from "./EditForm";

export default function ExpenseTable({ toTitleCase, expenseData, fetchExpenseData, checkedExpenses, setCheckedExpenses }) {

    // Infinite loop avoided by not calling fetchData here but instead in parent
    useEffect(() => {
        setCheckedExpenses(expenseData);
    }, [expenseData])

    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState(null);

    function expensePercent(expense) {
        let expenseTotal = 0;
        let num = 0;
        for (let i = 0; i < checkedExpenses.length; i++) {
            expenseTotal += checkedExpenses[i].amount;
        }

        if (checkedExpenses.includes(expense)) {
            num = (expense.amount / expenseTotal) * 10000;
        }

        return `${Math.round(num) / 100}%`;
    }

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
                        <th>Percent of Total Expenses</th>
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
                                <td>{expensePercent(expense)}</td>

                                <td>
                                    <EditButton
                                        item={expense}
                                        setEditItem={setEditItem}
                                        setEditMode={setEditMode}
                                    />
                                </td>
                                <td>
                                    {editMode && <EditForm
                                        fetchAllocationData={fetchAllocationData}
                                        editItem={editItem}
                                        setEditMode={setEditMode}
                                    />}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}