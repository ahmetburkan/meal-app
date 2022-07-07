import React, { useContext } from 'react';
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
import { AuthContext } from './context/AuthContextProvider';
import { ThemeContext } from "./context/ThemeContextProvider";

function App() {
    const { isAuth } = useContext(AuthContext);
    const { overlay, type, message, loading } = useContext(ThemeContext);

    return (
        <div className={'base-layout ' + (overlay ? overlay : '')}>
            <div className={'loading-overlay ' + (loading ? "active" : '')}></div>
            <div className={'pop-up-message ' + (type ? type : '')}>
                <p>{message}</p>
            </div>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        !isAuth ? <Login /> : <Navigate to="/welcome" />
                    }/>
                    <Route exact path="/register" element={
                        !isAuth ? <Register /> : <Navigate to="/welcome" />
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
        </div>
    );
}

export default App;
