import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { getPhotos } from './components/CustomPhotos';
import ListTodos from './components/ListTodos';
import Photos from './components/Photos';
import Home from './components/Home';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/todos">Todo list</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<ListTodos />} />
          <Route path="/photos" element={<Photos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
