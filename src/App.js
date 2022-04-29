import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Login/Login/Login'
import Signup from './Pages/Login/Signup/Signup'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
