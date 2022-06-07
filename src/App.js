import LoginPage from  './components/LoginPage/index'
import SignUpPage from './components/SignupPage';
import RedirectPage from './components/RedirectPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path ='/signup' element={<SignUpPage />} />
        <Route path ='/oauth2/login/callback/kakao' element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
