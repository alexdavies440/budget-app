

export default function AddExpense() {

    return (
        <div>
            <form action="">
                <label htmlFor="description">Expense:
                    <input type="text" name="description" />
                </label>
                <label htmlFor="cost">$
                    <input type="number" name="cost" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}