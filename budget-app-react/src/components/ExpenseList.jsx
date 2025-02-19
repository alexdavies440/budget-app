import RemoveExpenseButton from "./RemoveExpenseButton";
import SelectCategory from "./SelectCategory";

export default function ExpenseList({ listData }) {

    return (
        <ul className="expenseList">
            {listData.map((expense) => {
                return (
                    <li key={expense.id}>
                        ${expense.cost} - {expense.description}
                        <SelectCategory expense={expense} />
                        <RemoveExpenseButton />
                    </li>
                );
            })}
        </ul>
    );
}