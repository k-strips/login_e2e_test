import React, {useState} from 'react'
import "./App.css"
import {Button, FormField} from './components/my_components'

let credentials = {
  name: "k-strips",
  password: "$all4you",
}

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmit = () => {
    if(name === credentials.name && password === credentials.password){
      setIsUser(true);
      setErrorMessage(false);
    }else{
      setIsUser(false);
      setErrorMessage(true);
    }
  }

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setErrorMessage(false);
    if(name === "name"){
      setName(value);
    }
    if(name === "password"){
      setPassword(value);
    }
  }

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
            onChange={onInputChange}
            /><br/>
            Password: <FormField
            name="password"
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={onInputChange}
            />
          </form>
          <Button
            className = "Login_button"
            onClick={onSubmit}
            type="button"
          >
            Login
          </Button><br/>
        { errorMessage ?
            <small id="errormessage">Username or password is invalid!</small>
            : null}
        </div>
        }
      </div>
  )
}

export default App;
