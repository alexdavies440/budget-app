import RemoveButton from "./RemoveButton";

RemoveButton

export default function IncomeTable({ toTitleCase, incomeData, fetchIncomeData }) {

    function toTitleCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table>
            <thead>
                <tr>
                    <h3>Revenue</h3>
                </tr>
                <tr>
                    <th>Allocation</th>
                    <th>Source</th>
                </tr>

            </thead>
            <tbody>
                {incomeData.map((incomeSource) => {
                    return (
                        <tr>
                            <td>${incomeSource.amount}</td>
                            <td>{toTitleCase(incomeSource.description)}</td>
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