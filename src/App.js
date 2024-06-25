import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar1 from './Components/Navbar1';
import Amazon from './Components/Amazon';
import Kids from './Components/Kids';
import Female from './Components/Female';
import Training from './Components/Training';
import Fee from './Components/Fee';
import Admission from './Components/Admission';
import Login from './Components/Login';
import Enroll from './Components/Enroll';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar2 from './Components/Navbar2';
import Development from './Components/Development';
import Wordpress from './Components/Wordpress';
import Detailpage from './Components/Detailpage';
import Marketing from './Components/Marketing';
import Marketingdetail from './Components/Marketingdetail';
import About from './Components/About';
import Career from './Components/Career';




function App() {
  return (
    <div className="App">
  <Navbar1/>
  <Navbar2/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/career' element={<Career/>}/>
  <Route path='/amazon' element={<Amazon/>}/>
  <Route path="/kids" element={<Kids/>}/>
  <Route path="/female" element={<Female/>}/>
  <Route path="/training" element={<Training/>}/>
  <Route path="/fee" element={<Fee/>}/>
  <Route path="/admission" element={<Admission/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/enroll" element={<Enroll/>}/>
  <Route path="/marketing" element={<Marketing/>}></Route>
  <Route path="/marketing/:id" element={<Marketingdetail/>}></Route>
  <Route path="/development" element={<Development/>}></Route>
  <Route path="/development/:id" element={<Detailpage/>}></Route>
  <Route path='/wordpress' element={<Wordpress/>}></Route>
</Routes>

  
 <Footer/>
</div>
  
  );
}

export default App;
