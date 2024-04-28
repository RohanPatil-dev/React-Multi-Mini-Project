import React from "react"

export default function TodoList(props) {

    function remove(index) {
      
     props.array.splice(index,1)

     return props.setArray([...props.array])

    }

  return (
    <>
         <div>
            {
              props.array.map((data,index)=>{
                console.log(index,data);
                 return(
                    
                    <div key={index}>
                    <div className="container mt-3 w-50 bg-dark p-3 text-light" style={{fontSize : "20px",borderRadius : "20px",display : "grid",gridTemplateColumns : "auto auto"}} >
                       <p style={{marginLeft : "70px"}}>{data.values}</p>

                       <button className="btn btn-danger w-50" onClick={()=>{remove(index)}}>Delete</button>
                    </div>
                    </div>
                
                 )
              })
            }
         </div>
    </>
  )
}