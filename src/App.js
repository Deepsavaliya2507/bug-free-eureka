import './App.css';
// import Header from './Header/Header';
import Home from './Home/Home';
import Second from './Secondpage/Second';
// import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Footerpage from './Layout/Footer/Footerpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        {/* <Header /> */}
        <Routes >
          <Route element={<Layout />} >
            <Route path="/Home" element={<Home />} />
            <Route path="/Secondpage" element={<Second />} />
            <Route path="/Footerpage" element={<Footerpage />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <Home /> */}
      
    </div>
  );
}

export default App;
