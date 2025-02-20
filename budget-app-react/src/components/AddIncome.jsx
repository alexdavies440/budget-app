import { useState } from "react";

export default function AddIncome() {

    const [income, setIncome] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Income Source:
                    <input type="text" name="income-source"/>
                </label>
                <label>Amount per Month:
                    <input type="number" name="income-amount" value={income} onChange={(e) => setIncome(e.target.value)}/>
                </label>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}