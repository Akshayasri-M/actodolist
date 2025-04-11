import { useState } from "react";
import Todoitem from "./Todoitem";

function Todolist(props){
    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;

    return(


        <div className="flex flex-col gap-2 p-5 bg-[#e49797] rounded-md flex-grow">
          <h1 className="text-2xl font-medium">Todo Activities</h1>
          {activityArr.length===0?<p>You haven't added anything yet!🙁</p>:""}
          {
            activityArr.map(function(item,index){
                return <Todoitem activity={item.activity} id= {item.id} item={item} value= {index} activityArr={activityArr} setactivityArr={setactivityArr}/>
            })
          }
        </div>
    )
}

export default Todolist;