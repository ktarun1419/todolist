import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todoList:['default']
    },
    reducers:{
        addTodo:(state,{payload})=>{
            state['todoList']=[...state['todoList'],payload]
        },
        removeTodo:(state,{payload})=>{
            state['todoList'].splice(payload,1)
        }

    }
})
export const {addTodo,removeTodo}=todoSlice.actions;
export const todoSelector=state=>state.todoSelector;
export default todoSlice.reducer