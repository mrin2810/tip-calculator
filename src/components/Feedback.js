export default function Feedback({select, setSelect, children}) {
    return <div className="container">
        {children}
        <select name="feedback-value" value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value={0}>It was bad (0%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Absolutelt amazing! (20%)</option>
        </select>
    </div>
}