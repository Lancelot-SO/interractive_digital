import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Marketing from './components/Marketing';
import Advertising from './components/Advertising';
import Video from './components/Video';
import DigitalStrategy from './components/DigitalStrategy';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/advertising' element={<Advertising />} />
          <Route path='/video' element={<Video />} />
          <Route path='/digitalstrategy' element={<DigitalStrategy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpost' element={<BlogPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
