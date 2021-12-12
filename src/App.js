
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AuthenticationPage from './Pages/AuthenticationPage';
import LoginPasswordPage from './Pages/LoginPasswordPage';
import PasswordResetPage from './Pages/PasswordResetPage';
import ResetSuccess from './Pages/ResetSuccessPage';
import ResetEmailError from './Pages/ResetEmailErrorPage';
import ResetPasswordError from './Pages/ResetPasswordErrorPage';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage/>} exact />
      <Route path="/signin" element={ <AuthenticationPage/>} />
      <Route path="login-password" element ={<LoginPasswordPage/>}/>
      <Route path="/forget-password" element={ <PasswordResetPage/>} />
      <Route path = "/reset-success" element = {<ResetSuccess/>}/>
      <Route path = "/reset-email-error" element = {<ResetEmailError/>}/>
      <Route path = "/reset-password-error" element = {<ResetPasswordError/>}/>
      <Route path = "/dashboard" element={ <Dashboard/>} />
    </Routes>
  );
}

export default App;