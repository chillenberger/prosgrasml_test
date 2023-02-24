import './css/App.css';
import React from 'react'; 
import oathLogo from './static/oath.svg';
import githubLogo from './static/github.svg';
import googleLogo from './static/google.svg';

function App() {


  return (
    <div className="App">
      <div className="card">
          <h3>Create Account</h3>
          <p className="instructions">Sign up to PostgressML by entering an email and password.</p>
          <form className="signupForm">
            <label>Email</label>
            <input className="textInput" type="text" placeholder='example@yahoo.com'/>
            <label>Create Password</label>
            <input className="textInput" type="text"/>
            <label>Repeat Password</label>
            <input className="textInput" type="text"/>
            <div className="checkboxContainer">
              <input type="checkbox" className="checkbox"/> 
              <p>By creating an account you agree with the <a className="link" href="https://www.example.com">Terms of Service</a> and our <a className="link" href="https://www.example.com">Privacy Policy</a></p>
            </div>
            <input className="submit" type="submit"/>
          </form>
          <div className="icons">
            <img src={oathLogo}/>
            <img src={githubLogo}/>
            <img src={googleLogo}/>
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
