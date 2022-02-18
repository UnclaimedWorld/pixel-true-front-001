import './App.scss';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { RecoverPage } from './pages/RecoverPage';
import HomeLayout from './components/pages/HomeLayout';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/recover" element={<RecoverPage/>}/>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="home" element={<HomePage/>}/>
          <Route path="add" element={<AddPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
