import React,{useState} from "react"
import Navbar from "./Navbar"

import Modal from "./Modal"

import Container from "./Container"
import Indian from "./Indian"

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Chinease from "./Chinease"
import South_indian from "./South_indian"


export default function Home() {

  const [colors, setColors] = useState({
    color : "light",
    backgroundColor : "light",
    text : "Enable Dark Mode"
  })

  const [element, setElement] = useState([])

  console.log(element);

  return (
     <>
       {/* <Navbar colors={colors.color} background={colors.backgroundColor} text={colors.text} setColors={setColors} />
       <Container colors={colors.color} background={colors.backgroundColor} setColors={setColors} element={element} setElement={setElement} />     
           */}
        <Modal element={element} colors={colors.color} background={colors.backgroundColor} />  







      <Routes>
        <Route path="/" element={<Navbar colors={colors.color} background={colors.backgroundColor} text={colors.text} setColors={setColors} />}>
             <Route path="/" element={<Container colors={colors.color} background={colors.backgroundColor} setColors={setColors} element={element} setElement={setElement} />     }/>
             <Route path="/indian" element={<Indian colors={colors.color} element={element} setElement={setElement} />}/>
             <Route path="/chinese" element={<Chinease colors={colors.color}  element={element} setElement={setElement} />}/>
             <Route path="/South_indian" element={<South_indian colors={colors.color}  element={element} setElement={setElement} />}/>
        </Route>
      </Routes>

    
     </>
  )
}