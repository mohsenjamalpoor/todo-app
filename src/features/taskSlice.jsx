


 import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../Data";
import { v4 as uuidv4 } from 'uuid';






const taskSlice = createSlice({
    name:"tasks",
    initialState:taskList,
    filter:"all",
    reducers:{
      addTask: (state, action) => {
        console.log("add------>", state, action)

        // state.push(action.payload)
        const uuid = uuidv4()
        console.log("uuidv4", uuid)
        state.push({...action.payload, id:uuid})
      },
      editTask: (state, action) => {
        console.log("action.payload------>", action.payload)
        const index = state.findIndex(task => task.id === action.payload.id);
        console.log("2======>" , state[index])
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
      deleteTask: (state, action) => {
        const {name} = action.payload;
        const uu = state.find(task => task.name == name);
        if(uu){
          return state.filter(f => f.name !== name);
        }
        

    },
    filterTask: (state, action) => {
      state.filter = action.payload;
    }
  }
})
export const {addTask, editTask,deleteTask, filterTask} = taskSlice.actions;
export default taskSlice.reducer;