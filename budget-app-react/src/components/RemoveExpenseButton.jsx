

export default function RemoveExpenseButton({id, fetchExpenseData}) {
    
    function handleRemoveExpense() {

        const url = 'http://localhost:8080/delete-expense/';

        fetch(url + id, {
            method: 'DELETE'
          }).then(fetchExpenseData);
    }

    return (
        <button className="removeButton" onClick={handleRemoveExpense}>X</button>
    );
}