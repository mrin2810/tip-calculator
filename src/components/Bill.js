export default function Bill({ amount, onAmount }) {
    return <div className="container">
        <span>How much was the bill?</span>
        <input
            type="text"
            name="bill"
            value={amount}
            onChange={(e) => onAmount(e.target.value)}
            placeholder="Enter bill amount..."
        />
    </div>
}