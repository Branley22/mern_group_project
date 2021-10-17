
import './App.scss';
import {
  Home,
  Login,
  Register,
  Dashboard,
  Movies,
  Movie,
  Create,
  Profile,
  Nav
} from './components';


import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/">
          <Login path="login"/>
          <Register path="register"/>
      </Home>
      <Dashboard path="home">
          <Movies path="/"/>
          <Create path="create" />
          <Movie path="movie" />
          <Profile path="profile" />
      </Dashboard>

      </Router>

    </div>
  );
}

export default App;
