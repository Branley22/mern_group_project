
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
  Edit
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
          <Movie path="/movie/:id"/>
          <Profile path="/profile/:id" />
      </Dashboard>
      </Router>

    </div>
  );
}

export default App;
