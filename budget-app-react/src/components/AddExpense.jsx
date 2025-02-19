import { useState } from "react";
import SelectCategory from "./SelectCategory";

export default function AddExpense({fetchData}) {

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
                cost: cost, 
                category: newCategory, 
            }),
          })
          .then(setDescription(""))
          .then(setNewCategory('MISC'))
          .then(setCost(""))
          .then(fetchData)

        } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Expense:
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>

                <SelectCategory 
                    newCategory={newCategory}
                    setNewCategory={setNewCategory}
                />
              
                <label htmlFor="cost">Cost: ＄
                    <input type="number" name="cost" value={cost} onChange={(e) => setCost(e.target.value)}/>
                </label>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
}
