
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EasyContact from './components/EasyContact/EasyContact';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Home/Service/Projects';
import Service from './components/Home/Service/Service';
import Header from './components/Navbar/Header';
import MobailApp from './components/ProjectNav/MobailApp/MobailApp';
import ProjectNav from './components/ProjectNav/ProjectNav';
// import { useSpring, animated } from 'react-spring'




function App() {
  return (
    <div className=" App">
      {/* <animated.div style={props}>I will fade in</animated.div> */}

      <Header></Header>
      <EasyContact></EasyContact>

      <Routes>
      <Route path='/'  element={<Home></Home>}></Route>
      <Route path="Projects/:serviceId"  element={<Projects></Projects>}></Route>
     <Route path='home' element={<Home></Home>}></Route>
     <Route path='Service' element={<Service></Service>}></Route>

     <Route path='ProjectNav' element={<ProjectNav></ProjectNav>}>
    
     <Route path='MobailApp' element={<MobailApp></MobailApp>}></Route>
      
       </Route>

     {/* <Route path='Contactme' element={<Contactme></Contactme>}></Route> */}

      
      </Routes>

<Footer></Footer>
    </div>
  );
}

export default App;
