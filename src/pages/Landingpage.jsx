import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const location = useLocation();
  const { username } = location.state;
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/");
  }
  return (
    <div className="bg-black p-16 relative">
          <button
        className="absolute top-4 right-4 bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="bg-[#fafafaf8] p-10 border rounded-md">
        <Header name={username} />
       
        <div className="flex text-center justify-between gap-5 mx-2 my-4 flex-wrap">
          <Card bgcolor={"#a294df"} title={"23°"} subtitle={"Chennai"} />
          <Card bgcolor={"#f6b7d9"} title={"April"} subtitle={"17:42:00"} />
          <Card bgcolor={"#d69ee5"} title={"Built Using"} subtitle={"React"} />
        </div>
        <Todocontainer />
      </div>
    </div>
  );

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
}

export default Landingpage;
