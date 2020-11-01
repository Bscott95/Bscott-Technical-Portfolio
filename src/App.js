import './App.css';
import { ButtonAppBar } from '/'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div>
      {/* <p>here is some text</p> */}
      <Router>
      <Navbar/>
      <Route component={AboutMe}/>
      <AboutMe/>
      {/* <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/search" component={Search}/>
      <Route path="/users" component={UserContainer}/>
      <Route exact path="/" component={About}/> */}
    </Router>
    </div>
  );
}

export default App;
