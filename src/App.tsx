import './App.scss';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { RecoverPage } from './pages/RecoverPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/recover" element={<RecoverPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
