import Task from "./Task"

const Tasks = ({ tasks, onDelete, onCompleted, onDoubleTap }) => {
    return (
        <>
            {tasks.map((task) => {
            return <Task key={task.id} id={task.id} text={task.text} day={task.day} reminder={task.reminder} isCompleted={task.isCompleted} onDelete={onDelete} onCompleted={onCompleted} onDoubleTap={onDoubleTap}/>
            })}
        </>
    )
}

export default Tasks
