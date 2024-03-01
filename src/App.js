import './App.css';
import React, {useState} from 'react'
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <MainHeader isLoggedIn={isLoggedIn} />
    {!isLoggedIn && <Login />}
    {isLoggedIn && <Home />}
    </>
    

  );
}

export default App;
