import Todoform from "./Todoform";
import Todolist from "./Todolist";
import { useState } from "react";

function Todocontainer(){
    const[activityArr,setactivityArr]= useState([
        {
            id: 1,
            activity: "Wake up at 7AM"
        },
        {
            id: 2,
            activity: "Do some Excerise"
        },
        {
            id: 3,
            activity: "Water the plants"
        }
    ])
    return(
        <div className="flex flex-wrap gap-5">
            <Todoform activityArr={activityArr} setactivityArr={setactivityArr} />
            <Todolist activityArr={activityArr} setactivityArr={setactivityArr} />
        </div>
    )
}

export default Todocontainer;