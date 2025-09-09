import React from 'react'

const Task = (props) => {
     return (
          <div
               className={`w-[95%] flex justify-between items-center rounded-sm px-2 py-1
      ${props.completed ? "bg-green-600" : "bg-[#444]"} md:w-[30%]`}
          >
               {/* Complete button */}
               <label
                    onClick={() => props.ToggleComplete(props.id)}
                    className="cursor-pointer"
               >
                    <i
                         className={`fa-solid fa-circle-check 
          ${props.completed ? "text-green-300" : "hover:text-green-500"}`}
                    ></i>
               </label>

               {/* Task text */}
               <h1 className={`${props.completed ? "line-through opacity-70" : ""}`}>
                    {props.Element}
               </h1>

               {/* Delete button */}
               <i
                    className="fa-solid fa-trash cursor-pointer hover:text-red-400"
                    onClick={() => props.DeleteTask(props.id)}
               ></i>
          </div>
     )
}

export default Task
