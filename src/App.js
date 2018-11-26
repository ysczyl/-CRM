import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import { BrowserRouter , Switch , Route  } from 'react-router-dom';
import './App.css';
import LoginR from './LoginR.js';
import Main from './Main.js';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
    };
}
  render() {
    return (
      <div>
          <BrowserRouter>
                 <Switch>
                         <Route exact path="/" component={LoginR} />
                         <Route exact path="/LoginR" component={LoginR} />
                         <Route exact path="/Main" component={Main} />
                 </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
