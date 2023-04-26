import React from "react"; // Добавьте эту строку
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedTodo from "./components/ListTodos/SelectedTodo";
import EditTodo from "./components/ListTodos/EditTodo";
import ListTodos from "./components/ListTodos";
import Photos from "./components/Photos";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/todos/:id" element={<SelectedTodo />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/edit-todo" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
