import { useState } from "react";

export default function AddIncome({ fetchAllocationData }) {

    const [allocationDescription, setAllocationDescription] = useState("");
    const [allocationAmount, setAllocationAmount] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/add-allocation', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: allocationDescription, 
                amount: allocationAmount, 
            }),
          })
          .then(setAllocationDescription(""))
          .then(setAllocationAmount(""))
          .then(fetchAllocationData)

        } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Income Source:
                    <input type="text" name="allocation-description" value={allocationDescription} onChange={(e) => setAllocationDescription(e.target.value)}/>
                </label>
                <label>Amount per Month:
                    <input type="number" name="allocation-amount" value={allocationAmount} onChange={(e) => setAllocationAmount(e.target.value)}/>
                </label>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}