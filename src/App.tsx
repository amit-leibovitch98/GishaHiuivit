import React from 'react';
import logo from './logo.svg';
import LandingPage from './Components/LandingPage';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";

import './App.css';
function App() {
    // @ts-ignore
    // @ts-ignore
    return (<Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/search" element={<LandingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
