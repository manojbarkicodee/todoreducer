import React,{useContext} from 'react'
import { TodoContext } from '../context/TodoContext'
import styles from "./todo.module.css"
const Todo = () => {
    const {value,setvalue}=useContext(TodoContext)
    const {dispatch}=useContext(TodoContext)
    // console.log(todos,value)
  return (
    <div>
        <input placeholder='Type here' className={styles.toenter} value={value.Text} onChange={(e)=>{
            setvalue({...value,Text:e.target.value})

        }} type="text" />
        <button className={styles.toadd} onClick={() => dispatch({ type: 'add' })}>+</button>
    </div>
  )
}

export default Todo