import RemoveExpenseButton from "./RemoveExpenseButton";

export default function ExpenseList({listData}) {

    return (
        <ul className="expenseList">
            {listData.map((expense) => {
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