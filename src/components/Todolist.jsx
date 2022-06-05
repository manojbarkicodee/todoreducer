import React,{useContext}from 'react'
import { TodoContext } from '../context/TodoContext'
// import { uuid } from 'uuidv4'
// const { uuidv4 } = require('uuidv4');
import styles from "./todo.module.css"
const Todolist = () => {
    const {todos,dispatch}=useContext(TodoContext)
  return (
    <div>
        {todos.map((e,index)=>{
// if(e.Text>0){
return( <div className={styles.todo} key={index}>
    <span className={styles.text}>{e}</span>
    <input  className={styles.input} onChange={(e)=>dispatch({ type: 'toggle',payload:e.target.checked})} type="checkbox" />
    <button className={styles.delete} onClick={()=>dispatch({type:'delete',payload:index})}>delete</button>
     </div>)
        })}
    </div>
  )
}

export default Todolist