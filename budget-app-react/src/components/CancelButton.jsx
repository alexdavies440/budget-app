

export default function CancelButton({ setEditMode }) {

    return (
        <button className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
    );
}