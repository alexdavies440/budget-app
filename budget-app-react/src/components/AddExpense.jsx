import { useState } from "react";
import SelectCategory from "./SelectCategory";

export default function AddExpense({ fetchExpenseData }) {

    const [description, setDescription] = useState("");
    const [newCategory, setNewCategory] = useState('MISC');
    const [cost, setCost] = useState("");

    const [descriptionError, setDescriptionError] = useState(false);
    const [ammountError, setAmmountError] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setDescriptionError(false);
        setAmmountError(false);

        if (description === "") {
            setDescriptionError(true);
        }
        if (cost < 1 || isNaN(cost)) {
            setAmmountError(true);
        }

        fetch('http://localhost:8080/add-expense', {
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

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Expense</label>
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a description..." />

            <SelectCategory
                newCategory={newCategory}
                setNewCategory={setNewCategory}
            />

            <label htmlFor="cost">Cost $</label>
            <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
            
            <button className="add-button">Add</button>

            {descriptionError && <div>Expense description cannot be blank</div>}
            {ammountError && <div>Cost must be at least $1.00</div>}
        </form>
    );
}
