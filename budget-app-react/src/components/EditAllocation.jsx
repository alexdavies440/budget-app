import { useState } from "react";
import CancelButton from "./CancelButton";

export default function EditAllocationForm({ fetchAllocationData, editItem, setEditMode }) {

    const [allocationDescription, setAllocationDescription] = useState(editItem.description);
    const [allocationAmount, setAllocationAmount] = useState(editItem.amount);

    const [descriptionError, setDescriptionError] = useState(false);
    const [ammountError, setAmmountError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setDescriptionError(false);
        setAmmountError(false);

        if (allocationDescription === "") {
            setDescriptionError(true);
        }
        else if (allocationAmount < 1 || isNaN(allocationAmount)) {
            setAmmountError(true);
        }
        else {

            const url = 'http://localhost:8080/update-allocation/';

            fetch(url + editItem.id, {
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
                .then(setEditMode(false))
        }

    }

    return (
        <div className="edit-form">
            <form onSubmit={handleSubmit} className="edit-form-inner inner-allocation">
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
                <button className="add-button">Save</button>
                <CancelButton setMode={setEditMode} />

                {descriptionError && <div>Allocation description cannot be blank</div>}
                {ammountError && <div>Amount must be least $1.00</div>}
            </form>
        </div>
    );
}