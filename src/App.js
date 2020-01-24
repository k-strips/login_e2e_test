import React, { Component }from 'react';
import './App.css';
import { FormField, Button } from './components/my_components';


let credentials = {
  name: "k-strips",
  password: "$all4you",
}


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      credentials,
      name: "",
      password: "",
      isUser: false,
      errormessage: false,
    };
  }

  onInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  onInputFocus = (e) => {
    const {name} = e.target;
    this.setState({errormessage:false});
    this.setState({[name]:""})
  }

  onSubmit = () => {
    const {name, password, credentials } = this.state;
    if(name === credentials.name && password === credentials.password){
      this.setState({isUser: true});
      this.setState({errormessage: false});
    }else{
      this.setState({isUser: false});
      this.setState({errormessage: true});
    }
  }

  render(){
    const {name, password, isUser, errormessage} = this.state;
    return(
      <div className="page">
        {isUser ? <h2>Hi! Welcome back {name}</h2>
        :
        <div className="card">
        <h2>Login with React and Cypress End-to-End Test</h2>
          <form id="login-form">
            Username: <FormField
            name="name"
            className="input"
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={this.onInputChange}
            onFocus={this.onInputFocus}
            /><br/>
            Password: <FormField
            name="password"
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onInputChange}
            onFocus={this.onInputFocus}
            />
          </form>
          <Button
            className = "Login_button"
            onClick={this.onSubmit}
            type="button"
          >
            Login
          </Button><br/>
          { errormessage ?
            <small id="errormessage">Username or password is invalid!</small>
            : null}
        </div>
        }
      </div>
    );
  }
}

export default App;
