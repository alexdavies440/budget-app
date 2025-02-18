import RemoveExpenseButton from "./RemoveExpenseButton";

export default function ExpenseList() {

    const dummyData = [
        {
            id: 1, 
            description: "groceries",
            cost: 150 
        },
        {
            id: 2, 
            description: "electric",
            cost: 50 
        },
        {
            id: 3, 
            description: "internet",
            cost: 65 
        }
    ]

    return (
        <ul className="expenseList">
            {dummyData.map((expense) => {
                return (
                    <li key={expense.id}>
                        ${expense.cost} - {expense.description}
                        <RemoveExpenseButton />
                    </li>
                );
            })}
        </ul>
    );
}