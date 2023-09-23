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
import WebDev from './components/Screens/WebDevelopment/Index'
import SEO from './components/Screens/SEO/Index'
import WebForm from './components/Forms/WebDevelopmentFrom/Index'
import SEOFrom from './components/Forms/SEOFrom/Index' 
import GraphicForm from './components/Forms/GraphicDesigningForm/Index'
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
        <Route path='/webdev' element={<WebDev/>}></Route>
        <Route path='/seo' element={<SEO/>}></Route>
        <Route path='/webform' element={<WebForm/>}></Route>
        <Route path='/seoform' element={<SEOFrom/>}></Route>
        <Route path='/graphicform' element={<GraphicForm/>}></Route>
      </Routes>
      <Footer/>
    
    </Fragment>
  );
}

export default App;
