import { useState } from "react";

export default function CheckBox({ expense, checkedExpenses, setCheckedExpenses }) {

    const [isChecked, setIsChecked] = useState(true);

    function handleChange(expenseItem) {

        setIsChecked(isChecked => !isChecked);

        if (isChecked) {
            const updatedCheckedExpenses = checkedExpenses.filter((exp) => exp !== expenseItem);
            setCheckedExpenses(updatedCheckedExpenses);
        }

        if (!isChecked) {
            const updatedCheckedExpenses = [...checkedExpenses, expenseItem];
            setCheckedExpenses(updatedCheckedExpenses);
        }
           
    }

    return (
        <input type="checkbox" checked={isChecked} onChange={() => handleChange(expense)} />
    );
}