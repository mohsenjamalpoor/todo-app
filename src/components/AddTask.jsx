
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTask } from "../features/taskSlice";
import { useDispatch } from "react-redux";
import MyModal from "./MyModal";


export default function AddTask() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("")
  const [status, setStatus] = useState("")
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);


  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addTask({name, priority, status,date}))
  navigate('/')
  }
  
  return (
    <>
<MyModal isVisible={showModal} onClose={() => setShowModal(false)}>

<div className="fixed z-10  bg-white left-0 top-0 bottom-0  right-0 flex justify-center items-center ">
  <div className=" border bg-white  border-gray-400 rounded-md p-2">
  <h1 className="text-center font-bold mb-3 ">New Task</h1>
  <form onSubmit={handleSubmit}>
  <div className="grid grid-cols-1">
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" className="font-semibold px-2 text-md py-2 border border-gray-400 rounded-md"/>
      </div>
      <div>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6" name="priority">
        <option value="">Priority</option>
       <option value="High">High</option>
       <option value="Medium">Medium</option>
       <option value="Low">Low</option>
       </select>
       <select value={status} onChange={(e) => setStatus(e.target.value)} className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6" name="status">
        <option value="">Status</option>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
       </select>
       <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6" name="date"></input>
      </div>
      <div className="grid-cols-1	flex justify-between items-center mt-10 ">
        <button type="submit" className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">SAVE</button>
        <Link to="/">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">Close</button>
        </Link>
        </div>
  </form>
  </div>
</div>



      
      </MyModal>
 
    </>
  )
}
