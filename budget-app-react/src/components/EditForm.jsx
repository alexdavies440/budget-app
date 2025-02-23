import { useState } from "react";
import AddAllocation from "./AddAllocation";

export default function EditForm({ ComponentToEdit, url, fetchItemData, editItem, setEditMode }) {

    return (
        <div className="edit-form">
            <div className="edit-form-inner">
                <ComponentToEdit
                    url={url + editItem.id}
                    fetchItemData={fetchItemData}
                    defaultItem={editItem}
                    setEditMode={setEditMode}
                    buttonText="Save"
                />
            </div>

        </div>
    );
}