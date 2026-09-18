import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./signup";
import Login from "./login";
import Profile from "./profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
