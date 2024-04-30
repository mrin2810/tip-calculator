export default function Total({bill, total, tip}) {
    return <div className="container">
        <h2>You pay ${total} (${bill} + ${tip} tip)</h2>
    </div>
}