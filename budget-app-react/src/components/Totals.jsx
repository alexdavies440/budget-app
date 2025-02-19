

export default function Totals({listData}) {

    let total = 0;

    for (let i = 0; i < listData.length; i++) {
        total += listData[i].cost;
    }

    return (
        <div>
            <h3>Total Expenses: {total}</h3>
        </div>
    );
}