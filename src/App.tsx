import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
