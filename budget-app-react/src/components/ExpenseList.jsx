import RemoveExpenseButton from "./RemoveExpenseButton";

export default function ExpenseList({ listData, fetchData }) {

    return (
        <ul className="expenseList">
            {listData.map((expense) => {
                return (
                    <li key={expense.id}>
                        ${expense.cost} - {expense.description} - {expense.category.toLowerCase()}                        
                        <RemoveExpenseButton 
                            id={expense.id}
                            fetchData={fetchData} 
                        />
                    </li>
                );
            })}
        </ul>
    );
}