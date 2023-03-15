import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Write from "../pages/Write";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/write" element={<Write />} />
            </Routes>
        </BrowserRouter>

    )
}
