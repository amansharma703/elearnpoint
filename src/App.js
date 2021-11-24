import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Error from './pages/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/service' element={<Service />} />
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default App;
