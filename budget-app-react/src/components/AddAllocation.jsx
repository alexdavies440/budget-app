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
                {/* <div> */}
                    <label htmlFor="allocation-description">Allocation</label>
                    <input type="text" name="allocation-description" value={allocationDescription} onChange={(e) => setAllocationDescription(e.target.value)} />
                {/* </div> */}
                {/* <div> */}
                    <label htmlFor="allocation-amount">Amount</label>
                    <input type="number" name="allocation-amount" value={allocationAmount} onChange={(e) => setAllocationAmount(e.target.value)} />
                {/* </div> */}
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}