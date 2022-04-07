import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
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
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
