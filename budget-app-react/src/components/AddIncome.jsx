import { useState } from "react";

export default function AddIncome({ fetchIncomeData }) {

    const [incomeDescription, setIncomeDescription] = useState("");
    const [incomeAmount, setIncomeAmount] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/add-income', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: incomeDescription, 
                amount: incomeAmount, 
            }),
          })
          .then(setIncomeDescription(""))
          .then(setIncomeAmount(""))
          .then(fetchIncomeData)

        } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Income Source:
                    <input type="text" name="income-source" value={incomeDescription} onChange={(e) => setIncomeDescription(e.target.value)}/>
                </label>
                <label>Amount per Month:
                    <input type="number" name="income-amount" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)}/>
                </label>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}