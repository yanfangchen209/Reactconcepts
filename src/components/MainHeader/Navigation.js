import React, { useContext } from 'react'
import classes from './Navigation.module.css'
import {Link} from 'react-router-dom';
import AuthContext from '../../store/authorization-context';

//with context, we don't nedd props {isLoggedIn, onLogout} any more
export const Navigation = () => {
  //hook, listen to events
  const ctx = useContext(AuthContext);
  return (
        /**
         * clicking on each link will trigger a full page reload as it navigates to a new URL 
         * specified in the href attribute. If your application doesn't require client-side 
         * routing and you're fine with page reloads, using regular anchor tags can be a 
         * simpler alternative**/
        <nav className={classes.nav}>
            {ctx.isLoggedIn && 
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/category">Category</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/new-featured">New & Featured</a></li>
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                </ul>}
        </nav>

  )
}

export default Navigation;
