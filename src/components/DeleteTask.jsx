import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/taskSlice"


function DeleteTask({task}) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()
  const handelDelete = (name) => {
    dispatch(deleteTask({name}))

  }
  return (
    <div>
      <div className=" grid-cols-1 text-2xl mb-5">
        <h1 className="text-center font-bold">Are you sure you want to delete this task?</h1>
        <div className="grid-cols-1	flex justify-between items-center mt-10 ">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">Close</button>
          <button onClick={() => handelDelete(task.name)} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">YES</button>
          </div>
          </div>
      
    </div>
  )
}

export default DeleteTask
