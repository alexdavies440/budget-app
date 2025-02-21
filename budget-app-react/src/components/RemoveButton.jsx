
export default function RemoveButton({ deleteUrl ,id, fetchData}) {
    
    function handleRemove() {

        const url = 'http://localhost:8080/delete-expense/';

        fetch(deleteUrl + id, {
            method: 'DELETE'
          }).then(fetchData);
    }

    return (
        <button className="remove-button" onClick={handleRemove}>X</button>
    );
}