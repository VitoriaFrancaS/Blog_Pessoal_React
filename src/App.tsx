import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
