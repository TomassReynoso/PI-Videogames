import './App.css';
import { Route, Switch } from "react-router-dom"
import Landing from './views/Landing Page/Landing';
import Home from './views/Home Page/Home';
import Form from './views/Form Page/Form';
import Detail from './views/Detail Page/Detail';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={NavBar} />
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/home"} component={Home} />
        <Route path={"/form"} component={Form} />
        <Route path={"/detail:id"} component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
