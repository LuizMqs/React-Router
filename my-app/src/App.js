import "./App.css";
import { useState } from "react";
import MyContext from "./context/MyContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Update from './pages/Update'

function App() {
  const [user, setUser] = useState();

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
          <li>
            <Link to='/update'>Update</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
