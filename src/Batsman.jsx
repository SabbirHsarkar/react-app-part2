import { useState } from "react"

export default function Batsman(){
 const [runs,setRuns]=useState(0);
 const [six,setSix]=useState(0);

 const handleSingle =()=> {
    const updatedRuns= runs+1;
    setRuns(updatedRuns);
 }
 const handleFour=()=> {
    const updatedRuns= runs+4;
    setRuns(updatedRuns);
 }
 const handleSix=()=> {
    const updatedRuns= runs+6;
    const sixUpdate=six+1;
    setSix(sixUpdate);
    setRuns(updatedRuns);
 }

 const styleUpdate={
    border:'2px solid yellow',
    background:'red',
    color:'green'
 }
 
    return(

   <div>
    <h3>Batsman Score: {runs}</h3>
    <h4>Number Of Sixes: {six}</h4>
    {
    runs>50 && <p>Score is 50</p>

    }
    <button onClick={handleSingle} style={styleUpdate}>Single</button>
    <button onClick={handleFour}  style={styleUpdate}>Four</button>
    <button onClick={handleSix}  style={styleUpdate}>Six</button>
   </div>

    )
}