import './calendar.css'

interface Props {
    name: String
}

function HeaderDay(props: Props) {
    return (
        <div className="header-day">
            <p>{props.name}</p>
        </div>
    )
}
export default HeaderDay