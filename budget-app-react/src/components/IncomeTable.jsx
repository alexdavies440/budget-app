import { useEffect } from "react";
import RemoveButton from "./RemoveButton";
import CheckBox from "./CheckBox";


export default function IncomeTable({ toTitleCase, incomeData, fetchIncomeData, checkedAllocations, setCheckedAllocations }) {

    useEffect(() => {
            setCheckedAllocations(incomeData);
        }, [incomeData])

    return (
        <table>
            <thead>
                <tr>Revenue</tr>
                <tr>
                    <th>Allocation</th>
                    <th>Source</th>
                    <th>Include</th>
                    <th>Remove</th>
                </tr>

            </thead>
            <tbody>
                {incomeData.map((incomeSource) => {
                    return (
                        <tr>
                            <td>${incomeSource.amount}</td>
                            <td>{toTitleCase(incomeSource.description)}</td>
                            <td>
                                <CheckBox
                                    item={incomeSource}
                                    checkedItems={checkedAllocations}
                                    setCheckedItems={setCheckedAllocations}
                                />
                            </td>
                            <td>
                                <RemoveButton
                                    deleteUrl={'http://localhost:8080/delete-income-source/'}
                                    id={incomeSource.id}
                                    fetchData={fetchIncomeData}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}