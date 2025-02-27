

export default function CancelButton({ setMode }) {

    return (
        <button className="cancel-button" onClick={() => setMode(false)}>Cancel</button>
    );
}