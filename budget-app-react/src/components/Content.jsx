import { useState, useEffect } from "react";
import Totals from "./Totals";
import ExpenseTable from "./ExpenseTable";
import AllocationTable from "./AllocationTable";


export default function Content() {

    const [expenseData, setExpenseData] = useState([]);
    const [allocationData, setAllocationData] = useState([]);

    const [checkedExpenses, setCheckedExpenses] = useState([]);
    const [checkedAllocations, setCheckedAllocations] = useState([]);

    useEffect(() => {
        fetchExpenseData();
        fetchAllocationData();
    }, [])

    async function fetchExpenseData() {
        const url = 'http://localhost:8080/expense-data';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setExpenseData(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchAllocationData() {
        const url = 'http://localhost:8080/allocation-data';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setAllocationData(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <ExpenseTable
                toTitleCase={toTitleCase}
                setExpenseData={setExpenseData}
                expenseData={expenseData}
                fetchExpenseData={fetchExpenseData}
                checkedExpenses={checkedExpenses}
                setCheckedExpenses={setCheckedExpenses}
            />
            <AllocationTable
                toTitleCase={toTitleCase}
                allocationData={allocationData}
                fetchAllocationData={fetchAllocationData}
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