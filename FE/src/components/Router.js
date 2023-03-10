import React from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Map from "../pages/Map";
import Home from "../pages/Home";
import Post from "../pages/Post";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/map' element={<Map />} />
                <Route path="/post" element={<Post />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    )
}
