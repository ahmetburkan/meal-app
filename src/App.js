import React, { useContext } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Random from "./pages/Random";
import Area from "./pages/Area";
import AreaOverview from "./pages/AreaOverview";
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
                        <Random/>
                    }/>
                    <Route exact path="/area" element={
                        <Area/>
                    }/>
                    <Route exact path="/area/:name" element={
                        <AreaOverview/>
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
