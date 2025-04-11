import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate()
  const [enteredun, setenteredun] = useState();
  const [enteredpwd, setenteredpwd] = useState();
  const [confirmpwd, setconfirmpwd] = useState(true);
  const [message, setMessage] = useState(
    "Turn your to-dos into ta-das! Please Sign up."
  );
  const users = props.users;
  const setusers = props.setusers;

  function handleUname(event) {
    setenteredun(event.target.value);
    console.log("user logged in");
  }
  function handleUpwd(event) {
    setenteredpwd(event.target.value);
    console.log("user logged in ");
  }
  function handleConfirm(event) {
    setconfirmpwd(event.target.value);
    console.log("user logged in");
  }
  function handleadduser() {
    if (!enteredun || !enteredpwd || !confirmpwd) {
      setMessage("All fields are mandatory*");
      return;
    }
    if (enteredpwd !== confirmpwd) {
      setMessage("Password doesn't match!");
      return;
    }
    setusers([...users, { username: enteredun, password: enteredpwd }]);
    setMessage("User signed up successfully!");
    navigate('/')
  }
  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#fafafaf8] p-10 border rounded-md">
          <h1 className="text-3xl font-medium m-2">Hey Hi!</h1>
          <p
            className={`text-xl m-2 ${
              message === "Password doesn't match!"
                ? "text-red-600"
                : message === "User signed up successfully!"
                ? "text-green-600"
                : "text-black"
            }`}
          >
            {message}
          </p>
          <div className="flex flex-col my-2">
            <input
              className=" w-52 bg-transparent p-2 border m-2 border-gray-400 rounded-md"
              type="text"
              placeholder="Add Username"
              onChange={handleUname}
            ></input>
            <input
              className=" w-52 bg-transparent p-2 border m-2 border-gray-400 rounded-md"
              type="text"
              placeholder="Add Password"
              onChange={handleUpwd}
            ></input>
            <input
              className=" w-52 bg-transparent p-2 border m-2 border-gray-400 rounded-md"
              type="text"
              placeholder="Confirm Password"
              onChange={handleConfirm}
            ></input>
            <button
              className=" w-36 m-2 bg-orange-400 hover:bg-orange-300 font-semibold p-3 border rounded-md"
              onClick={handleadduser}
            >
              Sign Up
            </button>
            <p>
              Already have an account? Please{" "}
              <Link to={"/"} className="underline text-blue-500">
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
