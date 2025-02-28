import { useState } from "react";
import CancelButton from "./CancelButton";

export default function AddAllocation({ fetchAllocationData, setAddMode }) {

    const [allocationDescription, setAllocationDescription] = useState("");
    const [allocationAmount, setAllocationAmount] = useState("");

    const [descriptionError, setDescriptionError] = useState(false);
    const [ammountError, setAmmountError] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();

        setDescriptionError(false);
        setAmmountError(false);

        if (allocationDescription === "") {
            setDescriptionError(true);
        }
        else if (allocationAmount < 0.01 || isNaN(allocationAmount)) {
            setAmmountError(true);
        } else {
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
                .then(setAddMode(false))
        }
    }

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit} className="add-form-inner inner-allocation">
                <label htmlFor="allocation-description">Allocation</label>
                <input
                    type="text"
                    name="allocation-description"
                    value={allocationDescription}
                    onChange={(e) => setAllocationDescription(e.target.value)}
                    placeholder="Add a description..."
                    autoFocus
                />

                <label htmlFor="allocation-amount">Amount</label>
                <input
                    type="number"
                    name="allocation-amount"
                    value={allocationAmount}
                    onChange={(e) => setAllocationAmount(e.target.value)}
                />

                <br />
                <button className="add-button">Add</button>
                <CancelButton setMode={setAddMode} />

                {descriptionError && <div>Allocation description cannot be blank</div>}
                {ammountError && <div>Amount must be least $0.01</div>}
            </form>
        </div>
    );
}