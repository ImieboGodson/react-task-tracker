import { useState } from "react"

const AddTask = ({ onAdd, display }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const [isCompleted] = useState(false)

    

    const onFormSubmit = (e) => {
        e.preventDefault()

        if(text === "") {
            alert("Please Enter A Task")
            return
        }

        if(day === "") {
            alert("Add task deadline")
            return
        }

        onAdd({ text, day, reminder, isCompleted })

        setText("")
        setDay("")
        setReminder(false)
    }


    return (
        <form className={`add-form ${!display ? "no-display" : ""}`} onSubmit={onFormSubmit}>
            <div className="form-control">
                <label>Add Task</label>
                <input type="text" placeholder="Enter Task" onChange={(e) => setText(e.target.value)} value={text}/>
            </div>
            <div className="form-control">
                <label>Add Day & Time</label>
                <input type="text" placeholder="Day, Time" onChange={(e) => setDay(e.target.value)} value={day}/>
            </div>
            <div className="form-control-check">
                <label>Add Reminder</label>
                <input type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>

            <input type="submit" value="Add Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
