import { useEffect } from "react";
import RemoveButton from "./RemoveButton";
import CheckBox from "./CheckBox";


export default function IncomeTable({ toTitleCase, allocationData, fetchAllocationData, checkedAllocations, setCheckedAllocations }) {

    useEffect(() => {
            setCheckedAllocations(allocationData);
        }, [allocationData])

    return (
        <table>
            <thead>
                <tr>Allocated Revenue</tr>
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
                        <tr>
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
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}