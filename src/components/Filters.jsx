
// import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterTask } from "../features/taskSlice";

export default function Filters() {
  const filters = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(filterTask(e.target.value));
  };
  return (
    <>
      <Link to="/">
        <button className="text-black">Back</button>
      </Link>
      <div className="fixed top-6 right-1/2 translate-x-1/2 min-h-screen w-72  flex gap-10  flex-col bg-white">
        <div className="flex gap-4 justify-around items-center w-28">
          <CiFilter className="text-4xl bg-indigo-400 rounded-full p-2 " />
          <div className="bg-white">
            <h2 className="font-bold whitespace-nowrap ">My To-Do Tasks</h2>
            <h4 className="font-thin  text-sm">Filters</h4>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300 my-4 rounded-xl"></div>

        <div className="flex flex-col gap-10 ">
          <div className="flex gap-4 justify-between">
            <div>
              <select className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <select
                id="status"
                value={filters}
                onChange={updateFilter}
                className="cursor-pointer w-40 border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
              >
                <option value="All">All</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
          <div className="flex mt-2 justify-center text-center">
            <button className="w-18 border border-indigo-400  hover:bg-indigo-500 hover:text-white rounded-md py-2 px-2 text-md font-semibold mt-10">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
