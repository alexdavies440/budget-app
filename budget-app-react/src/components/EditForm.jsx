import { useState } from "react";
import AddAllocation from "./AddAllocation";

export default function EditForm({ fetchAllocationData, editItem, setEditMode }) {

    return (
        <div className="edit-form">
            <div className="edit-form-inner">
                <AddAllocation
                    url={"http://localhost:8080/update-allocation/" + editItem.id}
                    fetchAllocationData={fetchAllocationData}
                    defaultItem={editItem}
                    setEditMode={setEditMode}
                    buttonText="Save"
                />
            </div>

        </div>
    );
}