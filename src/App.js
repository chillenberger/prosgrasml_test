import './css/App.css';
import React from 'react'; 
import logo from './static/oath.svg'

function App() {

  return (
    <div className="App">
      <div className="card">
          <h3>Create Account</h3>
          <p className="instructions">Sign up to PostgressML by entering an email and password.</p>
          <form className="signupForm">
            <label>Email</label>
            <input className="textInput" type="text"/>
            <label>Create Password</label>
            <input className="textInput" type="text"/>
            <label>Repeat Password</label>
            <input className="textInput" type="text"/>
            <label><input type="checkbox" className="checkbox"/> By creating an account you agree with the Terms of Service and our Privacy Policy</label>
            <input className="submit" type="submit"/>
          </form>
          <div className="icons">
            <img src={logo}/>
          </div>
          <div className="signIn">
              <p>Have an accont? </p>
              <button className="signInButton">Sign In</button>
          </div>
      </div>


    </div>
  );
}

export default App;
