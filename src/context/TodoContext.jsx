import React,{createContext,useState,useReducer} from "react"

export const TodoContext=createContext()

export const TodoProvider=({children})=>{
const [value,setvalue]=useState({id:Date.now(),Text:"",Completed:false})

let reducer=(state,action)=>{
    switch (action.type) {
        case 'add':
            // if(value.Text!==0){
                let x=state.includes(value.Text)
                // console.log(x)
                if(x===false){
var newdata=[...state, value.Text ]
                }
                else{
                    newdata=state
                }
            // }
setvalue({...value,Text:""})
if(value.Text.length!==0){
    
return (newdata)
}
else{
    return state
}
        case "toggle":
           let ultra=action.payload

           setvalue({...value,Completed:ultra})
        //    console.log(ultra)
           return state
           case "delete":
            let data=action.payload
            let id=state.filter((el,index)=>{
return index!==data
            })
            // console.log(data)
            return id
            
        default:
          return state;
      }

}

const [todos,dispatch]=useReducer(reducer,[])
// console.log(todos)
return <TodoContext.Provider value={{value,setvalue,todos,dispatch}} >{children}</TodoContext.Provider>
}