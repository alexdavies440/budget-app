import { useState, useEffect } from "react";

export default function SelectCategory({expense}) {

    const [expenseCategories, setExpenseCategories] = useState([]);
    const [newCategory, setNewCategory] = useState(expense.category);

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

    async function updateCategory() {
        const url = 'http://localhost:8080/update-categtory/' + expense.id;
        
        fetch(url, {
                method: 'POST',
                body: newCategory,
                headers: {
                    'Content-Type': 'application/json',
                  }
            });
    }

    function handleCategoryChange(event) {
        setNewCategory(event.target.value);

        

    }

    
    return (
        <label htmlFor="category">- Category:
            <select name="category" id="category" value={newCategory} onChange={handleCategoryChange}>
                {expenseCategories.map((category, index) => {
                    return (
                        <option key={index} value={category.toUpperCase()}>{category}</option>
                    );
                })}
            </select>
        </label>
    );
}