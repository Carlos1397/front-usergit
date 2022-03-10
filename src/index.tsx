import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/Usuarios/UserList";
import UserForm from "./components/Usuarios/UserForm";
import "bootswatch/dist/yeti/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/new-user" element={<UserForm />} />
          <Route path="/update/:id" element={<UserForm />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
