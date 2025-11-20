import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./views/LoginPage"
import HomePage from "./views/HomePage"
import About from "./views/About"
import NavBar from "./components/NavBar"
import NotFound from "./views/NotFound"


function App() {
    const token = true
  return (
    <>
 
     <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={token ? <About/> : <Navigate to="/"/>}/>
          <Route path="*" element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
