import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {

  return (
    // className={classes.root}
    <div>
      <AppBar position="static">
        <Toolbar>
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


// function ButtonAppBar(props) {
//   const classes = useStyles();
//   const { token } = useSelector(state => state.viewer);
//   const dispatch = useDispatch();

//   console.log(props);
//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     dispatch(setViewerToken(null));

//   };
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Button
//             component={Link}
//             to='/'
//             color="inherit">
//             About</Button>
//           <Button
//             to='/discover'
//             component={Link}
//             color="inherit">
//             Discover
//           </Button>
//           <Button
//             to='/search'
//             component={Link}
//             color="inherit">
//             Search
//           </Button>
//           <Button
//             to='/users'
//             component={Link}
//             color="inherit">
//             User
//           </Button>
//           {
//             token ?
//               <Button
//                 color='inherit'
//               >
//                 Sign Out
//               </Button> :
//               <div>
//                 <Button
//                   to='/signup'
//                   component={Link}
//                   color="inherit">
//                   Sign Up
//                 </Button>
//                 <Button
//                   to='/signin'
//                   component={Link}
//                   color="inherit">
//                   Sign In
//                 </Button>
//               </div>
//           }
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default withRouter(ButtonAppBar);
