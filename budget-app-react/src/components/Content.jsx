import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import Totals from "./Totals";
import ExpenseTable from "./ExpenseTable";
import AddAllocation from "./AddAllocation";
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
            console.log(json);
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

    function doNothing() {
        // setEditMode not applicable here
    }

    const defaultExpense = {
        description: "",
        amount: "",
        category: 'MISC',
    }

    const defaultAllocation = {
        description: "",
        amount: ""
    };

    return (
        <div>
            <AddExpense
                url="http://localhost:8080/add-expense"
                fetchItemData={fetchExpenseData}
                defaultItem={defaultExpense} 
                setEditMode={doNothing}
                buttonText={"Add"}
            />
            <AddAllocation
                url="http://localhost:8080/add-allocation"
                fetchItemData={fetchAllocationData}
                defaultItem={defaultAllocation}
                setEditMode={doNothing}
                buttonText={"Add"}
            />
            <ExpenseTable
                toTitleCase={toTitleCase}
                expenseData={expenseData}
                fetchExpenseData={fetchExpenseData}
                checkedExpenses={checkedExpenses}
                setCheckedExpenses={setCheckedExpenses}
            />
            <br />
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