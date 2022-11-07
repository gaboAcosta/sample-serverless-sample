import React from "react";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import UsersView from "./views/usersView";
import { getToken } from "./utils/session"


const App = () => {
    const token = getToken()
    if (!token) return <Login />
    return (
        <BrowserRouter>
            <Header />
            <br/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/users" element={<UsersView />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App
