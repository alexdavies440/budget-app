import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import AddButton from "./AddButton";
import AddExpense from "./AddExpense";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";
import EditExpense from "./EditExpense";

export default function ExpenseTable({ toTitleCase, setExpenseData, expenseData, fetchExpenseData, checkedExpenses, setCheckedExpenses }) {

    // Infinite loop avoided by not calling fetchData here but instead in parent
    useEffect(() => {
        setCheckedExpenses(expenseData);
    }, [expenseData])

    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const [addMode, setAddMode] = useState(false);

    const sortedExpenses = expenseData.sort((a, b) => b.amount - a.amount);
    setExpenseData(sortedExpenses);

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
            <div className="table-header">
                <h2>Expenses</h2>
                <AddButton setAddMode={setAddMode} />
            </div>

            {addMode && <AddExpense
                fetchExpenseData={fetchExpenseData}
                setAddMode={setAddMode}
            />}
            <table>
                <thead>
                    <tr>
                        <th>Cost</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>% of Total</th>
                        <th>Include</th>
                    </tr>
                </thead>

                <tbody>
                    {expenseData.map((expense) => {
                        return (
                            <tr key={expense.id}>
                                <td>${expense.amount}</td>
                                <td>{toTitleCase(expense.description)}</td>
                                <td>{toTitleCase(expense.category.toLowerCase())}</td>
                                <td>{expensePercent(expense)}</td>
                                <td>
                                    <CheckBox
                                        item={expense}
                                        checkedItems={checkedExpenses}
                                        setCheckedItems={setCheckedExpenses}
                                    />
                                </td>
                                <td>
                                    <EditButton
                                        item={expense}
                                        setEditItem={setEditItem}
                                        setEditMode={setEditMode}
                                    />
                                </td>
                                <td>
                                    <RemoveButton
                                        deleteUrl='http://localhost:8080/delete-expense/'
                                        id={expense.id}
                                        fetchData={fetchExpenseData}
                                    />
                                </td>
                                <td>
                                    {/* Ensures that only one layer is rendered, otherwise will render a layer for every item in the array... */}
                                    {editMode && editItem === expense && <EditExpense
                                        fetchExpenseData={fetchExpenseData}
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