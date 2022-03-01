import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Reports from "./views/Reports";
import Users from "./views/Users";
import React from "react";
import { getToken } from "./utils/session"


export default class App extends React.Component {
  render() {
    const token = getToken()
    if (!token) return <Login />
    return (
      <BrowserRouter>
        <Header />
        <br/>
        <Container>
          <Routes>
            <Route path="/" element={<Reports />}></Route>
            <Route path="/users" element={<Users />} />
          </Routes>
        </Container>
      </BrowserRouter>
    )
  }
}