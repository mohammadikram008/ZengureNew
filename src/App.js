import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Screens/Footer/Index'
import MainPage from './components/Screens/MainPage/Index'
import Contactus from './components/Screens/Contactus/Index'
import Navbar from './components/Screens/Navbar/Index'
import OurServices from './components/Screens/OurServices/Index'
import AboutUs from './components/Screens/AboutUs/Index'
import GraphicDesiging from './components/Screens/GraphicDesiging/Index'
function App() {
  return (
    <Fragment>

      {/* <MainPage/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/ourservices' element={<OurServices/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/graphic' element={<GraphicDesiging/>}></Route>
      </Routes>
      {/* <Footer/> */}
    
    </Fragment>
  );
}

export default App;
