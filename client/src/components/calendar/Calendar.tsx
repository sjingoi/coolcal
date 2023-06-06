import Day from "./Day"
import HeaderDay from "./HeaderDay"
import './calendar.css'

function Calendar() {
    const days: String[] = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className="calendar">
            <div className="days-header">
                {days.map(day=>(  <HeaderDay name={day}/>  ))}
            </div>
            {/* <div><div className="header-spacer"></div></div> */}
            <div className="row-lines">
                <div className="row-line"></div>
            </div>
            <div className="timetable">
                {days.map(day=>(  <Day name={day}/>  ))}
            </div>
            
        </div>
    )
}
export default Calendar