import React from "react"
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

function App(){
  return(
  <>
  <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
  </BrowserRouter>
  </>)

}
export default App;
