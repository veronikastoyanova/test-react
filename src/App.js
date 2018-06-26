import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Cinemas from './components/cinema/Cinemas';
import Login from './components/login/Login';
import Program from './components/cinema/Program';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Cinemas}/>
                <Route exact path="/cinemas" component={Cinemas}/>
                <Route exact path="/cinemas/:id" component={Program}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
