import { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";
import CheckBox from "./CheckBox";
import EditButton from "./Edit/EditButton";
import EditAllocation from "./Edit/EditAllocation";

export default function IncomeTable({ toTitleCase, allocationData, fetchAllocationData, checkedAllocations, setCheckedAllocations }) {

    useEffect(() => {
        setCheckedAllocations(allocationData);
    }, [allocationData])

    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState(null);

    return (
        <div>
            <h2>Allocations towards Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Allocation</th>
                        <th>Source</th>
                        <th>Include</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                <tbody>
                    {allocationData.map((allocation) => {
                        return (
                            <tr key={allocation.id}>
                                <td>${allocation.amount}</td>
                                <td>{toTitleCase(allocation.description)}</td>
                                <td>
                                    <CheckBox
                                        item={allocation}
                                        checkedItems={checkedAllocations}
                                        setCheckedItems={setCheckedAllocations}
                                    />
                                </td>
                                <td>
                                    <RemoveButton
                                        deleteUrl={'http://localhost:8080/delete-allocation/'}
                                        id={allocation.id}
                                        fetchData={fetchAllocationData}
                                    />
                                </td>
                                <td>
                                    <EditButton
                                        item={allocation}
                                        setEditItem={setEditItem}
                                        setEditMode={setEditMode}
                                    />
                                </td>
                                <td>
                                    {/* Ensures that only one layer is rendered, otherwise will render a layer for every item in the array... */}
                                    {editMode && editItem === allocation && <EditAllocation
                                        fetchAllocationData={fetchAllocationData}
                                        editItem={editItem}
                                        setEditMode={setEditMode}
                                    />}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}