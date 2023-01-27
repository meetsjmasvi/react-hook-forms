import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavToolbar } from "./components/NavToolbar";
import { Home } from "./Pages/Home";
import { FormPage } from "./Pages/FormPage";

function App() {
  return (
    <div className="App">
      <NavToolbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          {/* <Route
            path="/login"
            element={
              <Modal>
                <Login />
              </Modal>
            }
          />
          <Route
            path="/register"
            element={
              <Modal>
                <Register />
              </Modal>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
