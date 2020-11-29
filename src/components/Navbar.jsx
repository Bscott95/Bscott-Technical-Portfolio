import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#bbbfca', flexGrow:1}}>
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/lKosNCFoSt9DQ-bbo4_Xdbhdw2s_s9PyZxixv7d6mNzWrpBy0PNGCDld1VyTrKdWtnqizI0VDzyI5M91ewFE4bYPXzkZ-Qtx_4ymmSD3OIXtklGRwK5D6S6t0qyD77jLwpOXibUT" alt="my logo" style={{ height: 50, float: 'left' }}></img>
        </div>
        <Toolbar style={{ flexGrow: 1, float:'right'}}>
          <Button
            component={Link}
            to='/'
            color="inherit">
            About</Button>
          <Button
            to='/discover'
            component={Link}
            color="inherit">
            Portfolio
          </Button>
          <Button
            to='/search'
            component={Link}
            color="inherit">
            Contact
          </Button>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
