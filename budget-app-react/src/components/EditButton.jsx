import { useState } from "react";

export default function EditButton({ item, setEditItem, setEditMode }) {

    function handleEdit(editItem) {
        setEditItem(editItem);
        setEditMode(true);
    }

    return (
        <button onClick={() => handleEdit(item)}>Edit</button>
    )
}