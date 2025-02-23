

export default function EditButton({ item, setEditItem, setEditMode }) {

    function handleEdit() {
        setEditItem(item);
        setEditMode(true);
    }

    return (
        <button onClick={handleEdit}>Edit</button>
    )
}