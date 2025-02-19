import SelectCategory from "./SelectCategory";

export default function AddExpense() {

    async function handleSubmit(event) {
        event.preventDefault();
        
        fetch('http://localhost:8080/add-expense', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: 'post request test', 
                cost: 20.75, 
                category: 'Misc', 
                checked: true}),
          });
        } 

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="description">Expense:
                    <input type="text" name="description" />
                </label>

                {/* <SelectCategory categories={categories} /> */}
                <label htmlFor="cost">$
                    <input type="number" name="cost" />
                </label>
                <button>Add</button>
            </form>
        </div>
    );
}
