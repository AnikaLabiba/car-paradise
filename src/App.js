import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Login/Login/Login'
import Signup from './Pages/Login/Signup/Signup'
import Home from './Pages/Home/Home/Home';
import Cars from './Pages/Cars/Cars';
import CarDetails from './Pages/CarDetails/CarDetails';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddCar from './Pages/ManageCars/AddCar/AddCar';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <CarDetails></CarDetails>
          </RequireAuth>
        }></Route>
        <Route path='/addcar' element={<AddCar></AddCar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
