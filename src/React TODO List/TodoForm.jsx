import React,{ useState } from "react"
import TodoList from "./TodoList"

export default function TodoForm() {

    const [value, setValue] = useState("")
    const [array, setArray] = useState([])

    function handleClick(event) {
        event.preventDefault()
           
           const values = {values : value}

         setArray([...array,values])
    }

    // console.log(array);

    return (
        <>
            <div className="bg-dark text-light w-50 p-3 mt-5" style={{ margin: "auto",borderRadius : "20px" }}>
             <form action="" onSubmit={handleClick}>
             <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" onChange={(event)=>{return setValue(event.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write something Here" required />
                    <button type="submit" className="btn btn-primary mt-2 ml-2">Add</button>
                </div>
             </form>
            </div>

            <TodoList array={array} setArray={setArray}/>
        </>
    )
}