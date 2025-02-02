

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTask, deleteTask } from "../features/taskSlice";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { BiListUl } from "react-icons/bi";
import { useState } from "react";
import MyModal from "./MyModal";
import { TablePagination } from "@mui/material";







export default function Home() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  
  

  const [search, setSearch] = useState('')
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("")
  const [status, setStatus] = useState("")
  const navigate = useNavigate()
   

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()


const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handelDelete = (name) => {
    dispatch(deleteTask({name}))

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({name, priority, status,date}))
    navigate('/')
    }



  
    
  return (
    <>

    <div >


      <div className="grid-cols-1 flex justify-between items-center h-14 bg-indigo-600 text-white">
        <div className="flex items-center">
          <div className="ml-2 mt-1"><BiListUl /></div>
     <h1 className="select-none text-xl ml-2">My To-Do Tasks</h1>

        </div>
        <div className="flex items-center justify-around w-[300px] mr-2">
          <div className="flex items-center mr-4 relative ">
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="text-lg bg-transparent pl-3 pr-9 py-1 border-slate-400 transition-all border rounded-md outline-none hover:border-white focus:border-white" />
            <div className="absolute right-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
              </div>
          </div>
          <div className="text-2xl font-bold hover:bg-indigo-400 rounded-full p-2 transition-all">
         
          
         <Link to="/filters"> <button ><CiFilter /></button></Link>
            </div>


            <div className="text-2xl hover:bg-indigo-400 rounded-full p-2 transition-all">
           <button onClick={() => setShowModal(true)}><IoAddSharp /></button>
            </div>
        

        </div>
     

      </div>
     
     <table className="border-collapse w-full">
      <thead className="bg-gray-300">

  <tr className="border">
    <th className="border">Task Name</th>
    <th className="border">Priority</th>
    <th className="border">Status</th>
    <th className="border">Deadline</th>
    <th className="border">Actions</th>
  </tr>
      </thead>
      <tbody>


        {tasks.filter((task) => {
          return search.toLocaleLowerCase() === '' ? task : task.name.toLocaleLowerCase().includes(search);
        }).map((task, index) => (
          <tr className="text-center border-b border-gray-300 bg-white hover:bg-gray-100 select-none" key={index}>
            <td className="text-center border border-gray-300 pl-2 py-3">{task.name}</td>
            <td className="text-center border-r border-gray-300 pl-2 py-3"><span className={`${ task.priority === 'High' && 'bg-[#f44336] text-lg  text-white px-3 py-1 rounded-2xl'} ${ task.priority === 'Medium' && 'bg-[#ffc600] text-lg  text-white px-3 py-1 rounded-2xl'} ${ task.priority === 'Low' && 'bg-[#9e9e9e] text-lg  text-white px-3 py-1 rounded-2xl'}`}>{task.priority}</span></td>
            <td className="text-center border-r border-gray-300 pl-2 py-3"><span className={`${ task.status === 'Todo' && 'bg-[#2196f3] text-lg  text-white px-3 py-1 rounded-2xl'} ${ task.status === 'Done' && 'bg-[#4caf50] text-lg  text-white px-3 py-1 rounded-2xl'} ${ task.status === 'Doing' && 'bg-[#ff9800] text-lg  text-white px-3 py-1 rounded-2xl'}`}>{task.status}</span></td>
            <td className="text-center border-r border-gray-300 pl-2 py-3"><span className="border border-solid border-[#f44336] text-lg  text-[#f44336] px-3 py-1 rounded-2xl">{task.date}</span></td>
            <td>
              <div className="flex justify-around items-center">
              <Link to={`/editTask/${task.id}`} className=" cursor-pointer text-lg  text-gray-300 hover:bg-green-300  rounded-full p-2"><MdEdit /></Link>
               
                

              <button onClick={() => handelDelete(task.name)} className="cursor-pointer  text-lg text-gray-300 hover:bg-red-300 rounded-full p-2"><FaTrash /></button>
               
              </div>

              
             

              
            </td>
           

          </tr>

        ))}

  
  
      </tbody>
     
      
      
</table>
    </div>
    <MyModal isVisible={showModal} onClose={() => setShowModal(false)}>
    <div className="font-normal flex justify-center items-center ">
  <div className="  rounded-md p-2 ">
  <h1 className="text-center text-xl font-semibold text-gray-900 mb-5 ">New Task</h1>
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
       <select value={status} onChange={(e) => setStatus(e.target.value)} className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"  name="status">
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
    
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    
    </>
  )
}
