

export default function RemoveButton({ deleteUrl ,id, fetchData}) {
    
    function handleRemove() {

        fetch(deleteUrl + id, {
            method: 'DELETE'
          }).then(fetchData);
    }

    return (
        <button className="remove-button" onClick={handleRemove}>X</button>
    );
}