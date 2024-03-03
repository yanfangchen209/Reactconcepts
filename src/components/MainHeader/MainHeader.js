import React from 'react'
import Navigation from './Navigation';
import classes from './MainHeader.module.css'

export const MainHeader = ({isLoggedIn, onLogout}) => {
  return (
    <header className={classes['main-header']}>
        <h1>SuperMart</h1>
        <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout}/>
    </header>
  )
}

export default MainHeader;
