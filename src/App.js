import React, { Component }from 'react';
import './App.css';

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
          <form id="login-form">
            Username: <FormField
            name="name"
            className="input"
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={this.onInputChange}
            /><br/>
            Password: <FormField
            name="password"
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onInputChange}
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
            <small>Username or password is invalid</small>
            : null}
        </div>
        }
      </div>
    );
  }
}

const FormField = ({name, value, className, type, placeholder, onChange }) =>
  <input
  name={name}
  className={className}
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  />

const Button = ({onClick, className, children,}) => {
  return(
    <button
      onClick={onClick}
      className={className}
      type="submit"
    >
      {children}
    </button>
  );
}

export default App;
