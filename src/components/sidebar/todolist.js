import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo, removeTodo, todoSelector } from '../../slices/todoslice';
const TodoList = () => {
    const [todo,setTodo]=useState('')
    const {todoList}=useSelector(todoSelector)
    const dispatch=useDispatch()
    const Container=styled.div`
    width:100%;
    padding:1rem;
    padding-left:5rem
    height:100%;
    display:flex;
    gap:2rem;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column
    `;
    const Title=styled.div`
    font-size:2rem;
    font-weight:700;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    `
    const List=styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    width:100%;
    gap:1rem;

    `
    const Each=styled.div`
    display:flex;
    gap:2rem;
    width:100%;
    justify-content:center;
    align-items:center;
    font-size:2rem;
    font-weight:700;

    `
    const Button =styled.button`
padding:8px 16px;
background:white;
color:black;
border:0;
border-radius:8px
`
const addNewTodo=()=>{
dispatch(addTodo(todo))
setTodo('')
}
const removeATodo=(index)=>{
    dispatch(removeTodo(index))
}
  return (
  <Container >
   
    <Title>
        TodoList
    </Title>
   
   
    
    <List>
        <Each>
             <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} autoFocus  />
    <Button onClick={addNewTodo} >Add Todo</Button></Each>
        {
           todoList && Array.isArray(todoList) && todoList.map((item,_idx)=>(<Each>
            {item}  <Button onClick={()=>removeATodo(_idx)}>Remove</Button>
           </Each>))
        }
    </List>

   
  </Container>
  )
}

export default TodoList