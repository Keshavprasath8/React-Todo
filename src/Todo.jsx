import {useState,useRef} from 'react'
import Task from './Task'
import './Todo.css'

const Todo = ({text}) => {
    const[task, setTask] = useState([
        { id: 1, text: 'reading',isdone:true },
        { id: 2, text: 'writing',isdone:false },
        { id: 3, text: 'swimming',isdone:false },
    ])
    const inRef=useRef();

    //addTask
    const addTask = () => {
    const inputText=inRef.current.value.trim();
    if(inputText === ""){
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isdone: false,
    }
    setTask((prev) => [...prev, newTodo]);
    inRef.current.value = '';
    };

    //update
   const updateTask=(id)=>{
    setTask((prev) =>{
      return prev.map((text1) => {
        if(text1.id === id){
          return {
            ...text1,
            isdone:!text1.isdone,
          }
        }
        return text1;
      })
    })
   }

   //delete
   const deleteTask=(id)=>{
    setTask((prev) => prev.filter((text1) => text1.id !== id));
   }
  return (
<div id='todo' className='flex flex-col my-40  gap-4 '>
       <h1 className='text-3xl font-bold mx-4 my-3'></h1>
<div className='flex flex-col gap-4 mx-auto'>
  <div className='flex gap-2 mx-auto'>
    <div >
        <input ref={inRef} type="text" placeholder='Add your Task' className='py-3  px-4 w-full text-sm border rounded-lg focus:outline-none focus:border-amber-400 font-semibold'  />
    </div>
        <button className='py-2 px-4 bg-indigo-400 text-white hover:bg-indigo-500 rounded-lg border-none' onClick={addTask} >Add Task</button>
  </div>
    <div id="list" className='border my-4 py-2 px-4 w-[30rem] rounded-md bg-white text-lg text-black  font-semibold'>
       <h1>List of Task: </h1> 
        {task.length===0 ? (<p>No Task Found</p>):(task.map((text1, index) => {
            return <Task key={index} updateTask={updateTask} deleteTask={deleteTask} text={text1.text} isdone={text1.isdone} id={text1.id}/>
        })
      )}
    </div>
</div>
</div>
)}
export default Todo