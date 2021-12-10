
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AuthenticationPage from './Pages/AuthenticationPage';
import PasswordResetPage from './Pages/PasswordResetPage';
import ResetSuccess from './Pages/ResetSuccessPage';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage/>} exact />
      <Route path="/signin" element={ <AuthenticationPage/>} />
      <Route path="/forget-password" element={ <PasswordResetPage/>} />
      <Route path = "/reset-success" element = {<ResetSuccess/>}/>
      <Route path = "/dashboard" element={ <Dashboard/>} />
    </Routes>
  );
}

export default App;