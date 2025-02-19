import { useState, useEffect } from "react";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import Totals from "./Totals";


export default function Content() {

    const [listData, setListData] = useState([]);

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
            <AddExpense fetchData={fetchData}/>
            <ExpenseList listData={listData} />
            <Totals listData={listData} />
        </div>
    );
}