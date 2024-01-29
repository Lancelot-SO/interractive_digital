import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Service />} />
          <Route exact path='/marketing' element={<Marketing />} />
          <Route exact path='/advertising' element={<Advertising />} />
          <Route exact path='/video' element={<Video />} />
          <Route exact path='/digitalstrategy' element={<DigitalStrategy />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/blogpost' element={<BlogPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
