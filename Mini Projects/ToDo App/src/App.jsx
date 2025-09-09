import { useEffect, useState } from 'react'
import './index.css'
import Task from './Components/Task'

function App() {
  let [TodoList, setTodoList] = useState([])
  let [NewTask, setNewTask] = useState("")

  // takes new task value from input
  function HandelChange(e) {
    setNewTask(e.target.value)
  }

  // Adding new task to TODO list
  function AddTask() {
    if (NewTask.trim() === "") return;

    const task = {
      id: Date.now(), // unique ID
      name: NewTask,
      completed: false
    }

    const updatedTasks = [...TodoList, task]
    setTodoList(updatedTasks)
    localStorage.setItem("STORAGE", JSON.stringify(updatedTasks)) // save immediately
    setNewTask("")
  }

  function DeleteTask(id) {
    const updatedTasks = TodoList.filter((elem) => elem.id !== id)
    setTodoList(updatedTasks)
    localStorage.setItem("STORAGE", JSON.stringify(updatedTasks))
  }

  //  Toggle completed state
  function ToggleComplete(id) {
    const updatedTasks = TodoList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTodoList(updatedTasks)
    localStorage.setItem("STORAGE", JSON.stringify(updatedTasks))
  }

  // Load from storage once
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("STORAGE"))
    if (data) setTodoList(data)
  }, [])

  return (
    <div className='w-full h-screen bg-[#222] text-white font-bold flex justify-center items-center flex-col '>
      {/* Input + Button */}
      <div className='h-20 w-[70%] bg-[#333] rounded-t-sm text-black flex items-center justify-evenly p-2 md:h-[25%] md:w-[40%] md:px-10 shadow-[2px_2px_4px_black]'>
        <input
          className='bg-white w-[60%] rounded-lg border text-center'
          type="text"
          placeholder='Type Your Task'
          value={NewTask}
          onChange={HandelChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") AddTask()
          }}
        />
        <button
          className='bg-amber-300  h-7  px-2 rounded-lg cursor-pointer hover:shadow-[0px_0px_6px_yellow] hover:text-white duration-400 text-xs md:px-2 md:font-bold'
          onClick={AddTask}
        >
          Add Task
        </button>
      </div>

      {/* Tasks */}
      <div className='tasklist bg-[#333] text-white h-[60%] w-[70%] flex items-center flex-col gap-3  p-2 md:w-[40%] md:px-9 shadow-[2px_2px_4px_black] overflow-y-scroll'>
        {TodoList.length === 0 ? <h1 className='my-[25%] font-light font-mono'>Currently No Task Added</h1> : TodoList.map((Element) => (
          <Task
            key={Element.id}
            id={Element.id}
            Element={Element.name}
            completed={Element.completed}
            DeleteTask={DeleteTask}
            ToggleComplete={ToggleComplete}
          />
        )) }
      </div>
    </div>
  )
}

export default App
