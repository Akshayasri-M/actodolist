import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Todoitem(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  function handledelete(deleteid) {
    {
      var newactivity = activityArr.filter(function (item) {
        if (item.id === deleteid) {
          return false;
        } else {
          return true;
        }
      });
    }
    setactivityArr(newactivity);
  }
  function handledone(completedId) {
    const newactivity = activityArr.map((item) => {
      if (item.id === completedId) {
        return { ...item, completed: !item.completed }; 
      }
      return item;
    });
    setactivityArr(newactivity);
  }
  return (
    <div className="flex justify-between">
      <p
        className={props.item.completed ? "line-through text-emerald-800" : ""}
         >
        {props.value + 1}. {props.item.activity}
      </p>
      <div className=" flex justify-end">
        <button
          className="text-green-700 hover:text-green-900 p-2 rounded-full hover:bg-green-100 transition "
          onClick={() => handledone(props.id)}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
        </button>

        <button
          className="text-red-700 hover:text-red-900 rounded-md hover:bg-red-100 transition group "
          onClick={() => handledelete(props.id)}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="text-xl group-hover:animate-bounce"
          />
        </button>
      </div>
    </div>
  );
}
export default Todoitem;
