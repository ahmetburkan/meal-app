import React from 'react';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';


import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route>
                <Route exact path="/register" element={<Welcome/>}></Route>
                <Route exact path="/welcome" element={<Welcome/>}></Route>
                <Route exact path="/my-account" element={<Welcome/>}></Route>
                <Route exact path="/category" element={<Welcome/>}></Route>
                <Route exact path="/country" element={<Welcome/>}></Route>
                <Route exact path="/category/asian" element={<Welcome/>}></Route>
                <Route exact path="/country/netherland" element={<Welcome/>}></Route>

                <Route exact path="/meal" element={<Welcome/>}></Route>

                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
