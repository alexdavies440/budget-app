

export default function RemoveExpenseButton({id, fetchData}) {
    
    function handleRemoveExpense() {

        const url = 'http://localhost:8080/delete-expense/';

        fetch(url + id, {
            method: 'DELETE'
          }).then(fetchData);
    }

    return (
        <button className="removeButton" onClick={handleRemoveExpense}>x</button>
    );
}