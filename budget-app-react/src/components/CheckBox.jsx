import { useState } from "react";

export default function CheckBox({ item, checkedItems, setCheckedItems }) {

    const [isChecked, setIsChecked] = useState(true);

    function handleChange(anItem) {

        setIsChecked(isChecked => !isChecked);

        if (isChecked) {
            const updatedCheckedItems = checkedItems.filter((arrayItem) => arrayItem !== anItem);
            setCheckedItems(updatedCheckedItems);
        }

        if (!isChecked) {
            const updatedCheckedItems = [...checkedItems, anItem];
            setCheckedItems(updatedCheckedItems);
        }
           
    }

    return (
        <input type="checkbox" checked={isChecked} onChange={() => handleChange(item)} />
    );
}