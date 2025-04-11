import { useState } from "react";

function Todoform(props){
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;
  const[activity, setnewactivity]= useState("")
  
  function handleChange(event){
    setnewactivity(event.target.value)
   
  }
  function handleadd(){
    if (activity.trim() === "") {
      return; 
  }
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:activity}])
    setnewactivity("")
  }


    return(
        <div className="flex flex-col">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div className="flex mt-5">
        <input value={activity} onChange ={handleChange} className="p-3" type="text" placeholder="Add Activity" />
        <button onClick={handleadd} className="bg-[#5f2171] hover:bg-[#be6fab] hover:text-black text-white p-3 border rounded">Add</button>
        </div>
      </div>
    )
}

export default Todoform;