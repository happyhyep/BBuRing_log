import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Post from "../../pages/Post";
import LogIn from "../../pages/LogIn";
import Register from "../../pages/Register";
import Write from "../../pages/Write";
import HomeBeforeLogin from "../../pages/HomeBeforeLogin";
import UserInfo from "../../pages/UserInfo";
import SearchGroup from "../../pages/SearchGroup";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                {(localStorage.getItem('id') != null) ?
                <Route exact path='/' element={<Home />} /> : 
                <Route exact path="/" element={<HomeBeforeLogin />} /> }
                <Route path="/post" element={<Post />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/user/info" element={<UserInfo />} />
                <Route path='/write' element={<Write />} />
                <Route path="/searchgroup" element={<SearchGroup />} />
            </Routes>
        </BrowserRouter>

    )
}
