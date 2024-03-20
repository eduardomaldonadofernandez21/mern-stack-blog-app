import './App.css';
import Header from './components/header/index-header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index-home';
import AddNewBlog from './pages/add-blog/index-add-blog';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
