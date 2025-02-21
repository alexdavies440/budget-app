import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import Totals from "./Totals";
import ExpenseTable from "./ExpenseTable";
import AddIncome from "./AddIncome";
import IncomeTable from "./IncomeTable";


export default function Content() {

    const [expenseData, setExpenseData] = useState([]);

    const [incomeData, setIncomeData] = useState([]);

    const [checkedExpenses, setCheckedExpenses] = useState([]);

    const [checkedAllocations, setCheckedAllocations] = useState([]);

    useEffect(() => {
        fetchExpenseData();
        fetchIncomeData();
    }, [])

    async function fetchExpenseData() {
        const url = 'http://localhost:8080/expense-data';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setExpenseData(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchIncomeData() {
        const url = 'http://localhost:8080/income-data';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setIncomeData(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <AddExpense fetchExpenseData={fetchExpenseData} />
            <AddIncome fetchIncomeData={fetchIncomeData} />
            <br />
            <ExpenseTable
                toTitleCase={toTitleCase}
                expenseData={expenseData}
                fetchExpenseData={fetchExpenseData}
                checkedExpenses={checkedExpenses}
                setCheckedExpenses={setCheckedExpenses}
            />
            <br />
            <IncomeTable 
                toTitleCase={toTitleCase}
                incomeData={incomeData}
                fetchIncomeData={fetchIncomeData}
                checkedAllocations={checkedAllocations}
                setCheckedAllocations={setCheckedAllocations}
            />
            <Totals
                checkedAllocations={checkedAllocations}
                checkedExpenses={checkedExpenses}
            />
        </div>
    );
}