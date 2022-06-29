import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

import GlobalStyles from "./styles";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <GlobalStyles/>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;