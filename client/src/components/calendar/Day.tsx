import './calendar.css'

interface Props {
    name: String
}

function Day(props: Props) {
    return (
        <div className="day">
            <p>{props.name}</p>
        </div>
    )
}
export default Day