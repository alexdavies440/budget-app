
export default function AddExpense({categories}) {

    return (
        <div>
            <form action="">
                <label htmlFor="description">Expense:
                    <input type="text" name="description" />
                </label>

                <label htmlFor="category">Category:
                    <select name="category" id="category">
                        {categories.map((category, index) => {
                            return (
                                <option key={index} value={category}>{category}</option>
                            );
                        })}

                    </select>
                </label>
                <label htmlFor="cost">$
                    <input type="number" name="cost" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}
