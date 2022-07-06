import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

function App() {
    const isAuth = true;

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <Login/>
                }/>
                <Route exact path="/register" element={
                    <Register/>
                }/>
                <Route exact path="/welcome" element={
                    isAuth ? <Welcome /> : <Navigate to="/" />
                }/>
                <Route exact path="/my-account" element={
                    <Welcome/>
                }/>
                <Route exact path="/category" element={
                    <Welcome/>
                }/>
                <Route exact path="/country" element={
                    <Welcome/>
                }/>
                <Route exact path="/category/asian" element={
                    <Welcome/>
                }/>
                <Route exact path="/country/netherland" element={
                    <Welcome/>
                }/>
                <Route exact path="/meal" element={
                    <Welcome/>
                }/>
                <Route path="*" element={
                    <NotFound/>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
