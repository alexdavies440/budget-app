import { useState } from "react";

export default function CheckBox({expense, checkedExpenses, setCheckedExpenses}) {

    const [isChecked, setIsChecked] = useState(true);

    function handleChange() {
        setIsChecked(!isChecked);
    }
    console.log(isChecked);

    return (
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
    );
}