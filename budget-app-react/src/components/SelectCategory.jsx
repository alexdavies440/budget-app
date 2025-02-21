import { useState, useEffect } from "react";

export default function SelectCategory({ newCategory, setNewCategory }) {

    const [expenseCategories, setExpenseCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    async function fetchCategories() {
        const url = 'http://localhost:8080/expense-categories';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setExpenseCategories(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            {/* <div> */}
                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                    {expenseCategories.map((category, index) => {
                        return (
                            <option key={index} value={category.toUpperCase()}>{category}</option>
                        );
                    })}
                </select>
            {/* </div> */}
        </>
    );
}