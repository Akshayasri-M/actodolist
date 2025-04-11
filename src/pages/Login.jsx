import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate()
  const[enteredun,setenteredun]= useState()
  const[enteredpwd,setenteredpwd]=useState()
  const[registereduser,setregistereduser]=useState(true)
  const users= props.users


  function handleUname(event){
    setenteredun(event.target.value)
    console.log("user logined")

  }
  function handleUpwd(event){
    setenteredpwd(event.target.value)
    console.log("user logined")

  }
  function handleCheckuser(){
    let userfound = false;

    users.forEach(function(item){
        if(item.username === enteredun && item.password === enteredpwd){
            console.log("login successful")
            setregistereduser(true)
            userfound = true;
            navigate('/landing', { state: { username: enteredun } })
        }
        else{
            console.log("failed")
            setregistereduser(false)
        }
    })
    if(userfound === false){
        userfound = false;
      }
  }

 
  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#fafafaf8] p-10 border rounded-md">
          <h1 className="text-3xl font-medium m-2">Hello!</h1>
          {
          registereduser?  <p className="text-xl m-2">
            I help you to manage your activities after you login🙂
          </p> : <p className="text-xl text-red-600 m-2">Please Enter correct credentials or Sign Up!</p> 
          }
         
          <div className="flex flex-col my-2">
            <input
              className=" w-52 bg-transparent p-2 border m-2 border-gray-400 rounded-md"
              type="text"
              placeholder="Enter Username" onChange={handleUname}
            ></input>
            <input
              className=" w-52 bg-transparent p-2 border m-2 border-gray-400 rounded-md"
              type="text"
              placeholder="Enter Password" onChange={handleUpwd}
            ></input>
            <button className=" w-36 m-2 bg-orange-400 hover:bg-orange-300 font-semibold p-3 border rounded-md" onClick={handleCheckuser}>
              Login 
            </button>
            <p>
              Don't have an account? Please{" "}
              <Link to={"/signup"} className="underline text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
