import './App.css';
import React, {useEffect, useState} from 'react'
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

/*if don't store log in info and state, when app reload or user leave and come back soon, 
have to log in again, but we only have to record log info one time when log in, so useeffect is a good choice
*/
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInfo === "1"){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    //data validation goes here...
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
  }

  const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
  }



  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home />}
    </>
    

  );
}

export default App;
