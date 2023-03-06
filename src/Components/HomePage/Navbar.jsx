import React from 'react';
import { AppBar,Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <AppBar>
        <Toolbar style={{justifyContent:'space-around',p:10}} className='navtag'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Logout</Link>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;