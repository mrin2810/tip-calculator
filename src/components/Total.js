export default function Total({bill, tip1, tip2}) {
    const tip = (bill * (tip1 + tip2)) / 200;
    const total = bill + tip;
    return <div className="container">
        <h2>You pay ${total} (${bill} + ${tip} tip)</h2>
    </div>
}