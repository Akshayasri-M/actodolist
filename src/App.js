import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./index.css";
import { useState } from "react";
import Landingpage from "./pages/Landingpage";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [users, setusers] = useState([
    {
      username: "Akshaya",
      password: "1234",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />} />
          <Route path='/signup' element={<Signup users={users} setusers={setusers} />} />
          <Route path='/landing' element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

root.render(<App />);
