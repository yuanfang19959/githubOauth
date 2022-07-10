import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Callback from './pages/Callback';
import User from './pages/User';
 
function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

function App() {
  useEffect(() => {}, [])
  return (
    <>
      <Routes>
        <Route path="/callback" element={<Callback />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/" element={<Redirect to="/callback"/>}></Route>
      </Routes>
    </>
  )
}

export default App
