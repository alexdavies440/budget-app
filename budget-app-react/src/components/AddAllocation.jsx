import { useState } from "react";

export default function AddAllocation({ url, fetchItemData, defaultItem, setEditMode, buttonText}) {

    const [allocationDescription, setAllocationDescription] = useState(defaultItem.description);
    const [allocationAmount, setAllocationAmount] = useState(defaultItem.amount);

    const [descriptionError, setDescriptionError] = useState(false);
    const [ammountError, setAmmountError] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();

        setDescriptionError(false);
        setAmmountError(false);

        if (allocationDescription === "") {
            setDescriptionError(true);
        }
        if (allocationAmount < 1 || isNaN(allocationAmount)) {
            setAmmountError(true);
        }

        fetch(url, {
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
            .then(fetchItemData)
            .then(setEditMode(false))

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="allocation-description">Allocation</label>
            <input type="text" name="allocation-description" value={allocationDescription} onChange={(e) => setAllocationDescription(e.target.value)} placeholder="Add a description..." />
           
            <label htmlFor="allocation-amount">Amount</label>
            <input type="number" name="allocation-amount" value={allocationAmount} onChange={(e) => setAllocationAmount(e.target.value)} />
          
            <button className="add-button">{buttonText}</button>

            {descriptionError && <div>Allocation description cannot be blank</div>}
            {ammountError && <div>Amount must be least $1.00</div>}
        </form>
    );
}