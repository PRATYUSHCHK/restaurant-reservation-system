import React from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Success from './Pages/Success'
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from './Pages/Dashboard';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About'
import ViewReservation from './components/viewReservation';
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return <Router>
    <Routes>
      
      <Route path="/viewReservations" element={<ViewReservation />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      
    </Routes>
    <Toaster></Toaster>
  </Router>
}

export default App
// import React from "react";

// const App = () => {
//   return <h1>Working</h1>;
// };

// export default App;