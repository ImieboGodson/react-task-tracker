import { FaTimes, FaCheck } from 'react-icons/fa'

const Task = ({ id, text, day, reminder, isCompleted, onDelete, onCompleted, onDoubleTap }) => {
    
    return (
        <div className={`task ${reminder  ? "reminder" : ""} ${isCompleted ? "completed" : "" }`} onDoubleClick={() => onDoubleTap(id)}>
            <div>
                <h3>{text}</h3>
                <p>{day}</p>
            </div>
            <div className="task-option">
                <div className="done-task">
                    <FaCheck style={{ color: "green" }} onClick={() => onCompleted(id)}/>
                </div>
                <div className="delete-task">
                <FaTimes style={{ color: "red" }} onClick={() => onDelete(id)}/>
                </div>
            </div>
        </div>
    )
}

export default Task
