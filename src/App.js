import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home1 from './pages/Home1';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Mycart from './pages/Mycart';
import ViewDetails from './pages/ViewDetails';
import Buynow from './pages/Buynow';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/mycart' element={<Mycart/>}/>
      <Route path='/viewdetails' element={<ViewDetails/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
