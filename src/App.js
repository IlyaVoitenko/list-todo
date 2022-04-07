import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import SelectedTodo from './components/ListTodos/SelectedTodo';
import EditTodo from './components/ListTodos/EditTodo';
import ListTodos from './components/ListTodos';
import Photos from './components/Photos';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
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
