import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Footer from "./components/Footer"
import About from "./components/About"

const App = () => {
  const [display, setDisplay] = useState(false)
  const [tasks, setTasks] = useState([])


useEffect(() => {
  const getTasks = async() => {
    const tasksData = await fetchTasks()
    setTasks(tasksData)
  }

  getTasks()
}, [])

// fetches tasks
const fetchTasks = async() => {
  const fetchData = await fetch(`http://localhost:5000/tasks`)
  const res = fetchData.json()

  return res;
}

// fetches tasks
const fetchTask = async(id) => {
  const fetchData = await fetch(`http://localhost:5000/tasks/${id}`)
  const res = fetchData.json()

  return res;
}

  // Adds new task
  const addTask = async(task) => {
    const fetchNewTask = await fetch(`http://localhost:5000/tasks`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await fetchNewTask.json()

    setTasks([...tasks, data])
  }


  //Toggles the display of the AddTaskForm
  const toggleFormDisplay = () => {
    setDisplay(!display)
  }

 
  // Deletes tasks
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }))
  }


  // Sets Tasks as completed
  const completeTask = async(id) => {
    const taskCompleted = await fetchTask(id)
    const updatedTask = { ...taskCompleted, isCompleted: !taskCompleted.isCompleted }

    updateTaskData(id, updatedTask)

    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, isCompleted: !task.isCompleted} 
        : 
        task
      )
    )
  }

  // Sets reminder
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    updateTaskData(id, updatedTask)

    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} 
      : 
      task
    )
    )
  }

  // Updates Task Data at the backend
  const updateTaskData = async (id, updTask) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const taskData = response.json()

    return taskData;
  }
  
  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" formDisplay={display} onClicked={toggleFormDisplay}/>
        
        <Route path="/" exact render={(props) => {
            return (
            <>
              <AddTask onAdd={addTask} display={display}/>
              {
                tasks.length < 1 ? 
                (
                  "It's awfully quiet in here" 
                ) : (
                  <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onCompleted={completeTask}
                    onDoubleTap={toggleReminder}
                  />
                )
              }
            </>
            )
          }}
        />
        <Route path="/About" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
