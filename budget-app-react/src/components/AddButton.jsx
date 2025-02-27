
export default function AddButton({ setAddMode }) {

    return (
        <button className="new-button" onClick={() => setAddMode(true)}>New</button>
    )
}