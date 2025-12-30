"use client"
import {useState, useEffect} from "react"
import Homepage from "./components/homepage";
import Frontpage from "./components/frontpage";

export default function App() {
const [visible, setVisible] = useState(true);
useEffect(()=> {
  const timer= setTimeout(()=> setVisible(false), 7000);
  return() => clearTimeout(timer)
}, []
)
  return (
   <div>
   {visible ? <Frontpage/>:<Homepage/>}
   </div> 
  );
}
