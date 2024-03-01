import React from 'react'
import Navigation from './Navigation';
import classes from './MainHeader.module.css'

export const MainHeader = ({isLoggedIn}) => {
  return (
    <header className={classes['main-header']}>
        <h1>SuperMart</h1>
        <Navigation isLoggedIn={isLoggedIn}/>
    </header>
  )
}

export default MainHeader;
