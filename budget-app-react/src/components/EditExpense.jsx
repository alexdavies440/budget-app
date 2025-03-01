import { useState } from "react";
import SelectCategory from "./SelectCategory";
import CancelButton from "./CancelButton";

export default function EditExpense({ fetchExpenseData, editItem, setEditMode }) {

    const [description, setDescription] = useState(editItem.description);
    const [newCategory, setNewCategory] = useState(editItem.category);
    const [cost, setCost] = useState(editItem.amount);

    const [editDescriptionError, setEditDescriptionError] = useState(false);
    const [editAmmountError, setEditAmmountError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setEditDescriptionError(false);
        setEditAmmountError(false);

        if (description === "") {
            setEditDescriptionError(true);
        }
        else if (cost < 0.01 || isNaN(cost)) {
            setEditAmmountError(true);
        }
        else {

            const url = 'http://localhost:8080/update-expense/';

            fetch(url + editItem.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: description,
                    amount: cost,
                    category: newCategory,
                }),
            })
                .then(setDescription(""))
                .then(setNewCategory('MISC'))
                .then(setCost(""))
                .then(fetchExpenseData)
                .then(setEditMode(false))

        }
    }

    return (
        <div className="edit-form">
            <form onSubmit={handleSubmit} className="edit-form-inner inner-expense">
                <label htmlFor="description">Expense</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a description..."
                    autoFocus
                />

                <SelectCategory
                    newCategory={newCategory}
                    setNewCategory={setNewCategory}
                />

                <label htmlFor="cost">Cost $</label>
                <input
                    type="number"
                    name="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                
                <br />
                <button className="add-button">Save</button>
                <CancelButton setMode={setEditMode} />

                {editDescriptionError && <div>Expense description cannot be blank</div>}
                {editAmmountError && <div>Cost must be at least $0.01</div>}
            </form>
        </div>
    );
}

