import { useState, useEffect } from "react";
import AddExpense from "./AddExpense";
import Totals from "./Totals";
import ExpenseTable from "./ExpenseTable";


export default function Content() {

    const [listData, setListData] = useState([]);

    const [checkedExpenses, setCheckedExpenses] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const url = 'http://localhost:8080/expense-data';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setListData(json);

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <AddExpense fetchData={fetchData} />
            <br />
            <ExpenseTable
                listData={listData}
                fetchData={fetchData}
                checkedExpenses={checkedExpenses}
                setCheckedExpenses={setCheckedExpenses}
            />
            <Totals
                checkedExpenses={checkedExpenses}
                setCheckedExpenses={setCheckedExpenses}
            />
        </div>
    );
}