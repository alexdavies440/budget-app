import { useState, useEffect } from "react";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import Totals from "./Totals";


export default function Content() {

    const [listData, setListData] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData();
        fetchCategories();
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

    async function fetchCategories() {
        const url = 'http://localhost:8080/expense-categories';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
            setCategories(json);

        } catch (error) {
            console.error(error.message);
        }
    }
    
    return (
        <div>
            <AddExpense categories={categories} />
            <ExpenseList listData={listData} />
            <Totals listData={listData} />
        </div>
    );
}