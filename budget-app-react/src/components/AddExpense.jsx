import { useState } from "react";
import SelectCategory from "./SelectCategory";

export default function AddExpense({ fetchExpenseData }) {

    const [description, setDescription] = useState("");
    // May decide to pass this up from SelectCategory with useContext if it makes more sense
    const [newCategory, setNewCategory] = useState('MISC');
    const [cost, setCost] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

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
            {/* <div> */}
                <label htmlFor="description">Expense</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* </div> */}
            <SelectCategory
                newCategory={newCategory}
                setNewCategory={setNewCategory}
            />
            {/* <div> */}
                <label htmlFor="cost">Cost $</label>
                <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)} />
            {/* </div> */}
            <button className="add-button">Add</button>
        </form>
    );
}
