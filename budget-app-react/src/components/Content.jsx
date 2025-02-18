import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import Totals from "./Totals";


export default function Content() {
    return (
        <div>
            <AddExpense />
            <ExpenseList />
            <Totals />
        </div>
    );
}