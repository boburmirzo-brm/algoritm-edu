import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './routes/home-page/Home';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
