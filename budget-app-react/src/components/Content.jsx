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
        <div>
            <AddExpense />
            <ExpenseList listData={listData} />
            <Totals listData={listData} />
        </div>
    );
}