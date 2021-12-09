import logo from './logo.svg';
import './App.css';
import './scripts.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* title */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* results */}
        <div id="user-info">
          User Info:
          <p id="card-id"></p> sas
          <p id="name"></p>
          <p id="email"></p>
          <p id="tel"></p>
        </div>
        <h1>
          API Test Demo using React
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Github
        </a>

        {/* reveal info */}
        <label>Login to display info above!</label>
        <button onClick={display}>
          Reveal
        </button> 

        {/* login inputs */}
        <label>Login Here!</label>
        <div className="login-inputs">
          <input id="l-id" placeholder="card id"/>
          <input id="l-pass" placeholder="password"/>
        </div>
        <button onClick={login}>
          Login
        </button> 

        {/* register inputs */}
        <label>Register Here!</label>
        <div className="register-inputs">
          <div>
            <input id="r-id" placeholder="card id"/>
            <input id="r-name" placeholder="name"/>
          </div>
          <div>
            <input id="r-email" placeholder="email"/>
            <input id="r-tel" placeholder="tel"/>
          </div>
          <input id="r-pass" placeholder="password"/>
        </div>
        <button onClick={register}>
          Register
        </button> 
    
      </header>
    </div>
  );
}

// creates a new user and adds it to the database
function register() {
  let card = document.getElementById('r-id').value
  let name = document.getElementById('r-name').value
  let email = document.getElementById('r-email').value
  let tel = document.getElementById('r-tel').value
  let pass = document.getElementById('r-pass').value
  console.log(pass, tel, email, name, card);

  fetch('http://localhost:8080/api/user/register', {
    method: 'POST', 
    body: JSON.stringify({
      id: card,
      name: name,
      email: email,
      tel: tel,
      password: pass
    })
  }).then(res => {
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

// logins in an existing user
function login() {
  let card = document.getElementById('l-id').value
  let pass = document.getElementById('l-pass').value
  console.log(card, pass)

fetch('http://localhost:8080/api/user/login', {
  method: 'POST', 
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: card,
      password: pass
    })
  }).then(res => {
    return res.text();
  })
};

// displays user info if logged in 
function display() {
  fetch('http://localhost:8080/api/user/profile')
  .then(res => {
    return res.json();
  })
  .then(data => {
    document.getElementById("card-id").innerHTML = data[0].id;
    document.getElementById("name").innerHTML = data[0].name;
    document.getElementById("email").innerHTML = data[0].email;
    document.getElementById("tel").innerHTML = data[0].tel;
  })
  console.log("revealed")
}

export default App;
