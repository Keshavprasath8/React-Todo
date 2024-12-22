import React from 'react'

const Task = ({text,isdone,id,updateTask,deleteTask}) => {
  return (
    <div>
         <ul  className='rounded-md py-2 px-1 list-none hover:bg-gray-200 cursor-pointer w-[20rem] mx-14 flex justify-between'>
         <li className={isdone?"line-through":""} onClick={()=>updateTask(id)}>{text}</li>
        <div>
        <svg className='cursor-pointer  hover:fill-red-500' onClick={()=>deleteTask(id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>
       </ul>
    </div>
  )
}

export default Task