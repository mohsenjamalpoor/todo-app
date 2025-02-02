
import { CiFilter } from "react-icons/ci";


export default function Filters() {
  
 
  
  
  return (
    <>
     
     <div className="fixed top-0 right-0 min-h-screen w-72  flex  flex-col bg-white">
   <div className="flex justify-around items-center w-28">
   <CiFilter className="text-4xl bg-indigo-400 rounded-full p-2 "/>
   <div className="bg-white">
    <h2 className="font-bold ">My To-Do Tasks</h2>
    <h4 className="font-thin  text-sm">Filters</h4>
   </div>
   </div>
   <div className="w-full h-[1px] bg-slate-300 my-4 rounded-xl"></div>

   <div className="flex flex-col ">
    <div className="flex justify-between">
    <div>
    <select className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
      <option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
      </select>
    </div>
      <div>
      <select className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
        <option value="All">All</option>
        <option value="Todo">Todo</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
      </select>
      </div>
    </div>
      <div className="flex mt-2 justify-center text-center">
        <button className="w-18 border border-indigo-400  hover:bg-indigo-500 hover:text-white rounded-md py-2 px-2 text-md font-semibold mt-10">Reset</button>
        </div>
   </div>
   

    </div>
  
{/*     
   <form className="flex flex-col">
   <div className="flex justify-around items-center w-28">
   <CiFilter className="text-4xl hover:bg-indigo-400 rounded-full p-2 transition-all"/>
   <div className="select-none">
    <h2 className="font-bold">My To-Do Tasks</h2>
    <h4 className="font-thin text-sm">Filters</h4>
   </div>
   </div>
   

   <div className="flex flex-col">
    <select className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
      <option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
      </select>
      <select className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
        <option value="All">All</option>
        <option value="Todo">Todo</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
      </select>
      <div className="flex  text-center">
        <button className="w-20 border border-indigo-400 m-14 hover:bg-indigo-500 hover:text-white rounded-md py-2 px-2 text-md font-semibold mt-10">Reset</button>
        </div>
   </div>
   

    </form> */}
    </>
  )
}
