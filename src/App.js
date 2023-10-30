import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './routes/home-page/Home';
import CourseMap from './routes/map-page/CourseMap';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coursemap' element={<CourseMap/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
