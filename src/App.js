import React, { useContext } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import List from "./pages/List";
import Overview from "./pages/Overview";
import Meal from "./pages/Meal";

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
                    <Route exact path="/random" element={
                        <Meal/>
                    }/>
                    <Route exact path="/random/:list" element={
                        <Meal/>
                    }/>
                    <Route exact path="/area" element={
                        <List/>
                    }/>
                    <Route exact path="/area/:name" element={
                        <Overview/>
                    }/>
                    <Route exact path="/category" element={
                        <List/>
                    }/>
                    <Route exact path="/category/:name" element={
                        <Overview/>
                    }/>
                    <Route exact path="/ingredient" element={
                        <List/>
                    }/>

                    <Route exact path="/ingredient/:name" element={
                        <Overview/>
                    }/>
                    <Route exact path="/meal/:id" element={
                        <Meal/>
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
