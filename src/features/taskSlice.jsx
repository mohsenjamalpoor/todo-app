


 import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../Data";






const taskSlice = createSlice({
    name:"tasks",
    initialState:taskList,
    reducers:{
      addTask: (state, action) => {
        state.push(action.payload)
      },
      editTask: (state, action) => {
        
        state.tasks = state.tasks.map(task => (
          task.name === action.payload.name ? action.payload : task
        ))
       

      },
      deleteTask: (state, action) => {
        const {name} = action.payload;
        const uu = state.find(task => task.name == name);
        if(uu){
          return state.filter(f => f.name !== name);
        }
        

    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    } 
  }
})
export const {addTask, editTask,deleteTask,setCurrentPage} = taskSlice.actions;
export default taskSlice.reducer;