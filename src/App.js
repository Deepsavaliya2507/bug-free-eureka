import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Second from './Secondpage/Second';
import Layout from './Layout/Layout';
import Footerpage from './Layout/Footer/Footerpage';
import About from './About/About';
import Contact from './Contact/Contact';
import Link from './Link/Link';
import Course from './Course/Course';
import Team from './Team/Team';
import Support from './Support/Support';
import Blog from './Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/Secondpage" element={<Second />} />
            <Route path="/Footerpage" element={<Footerpage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Links" element={<Link />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
