import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* title */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* results */}
        <div id="user-info">
          User Info:
          <p id="card-id"></p> 
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
        <label>Display first user info above!</label>
        <button onClick={display}>
          Reveal
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

  fetch('http://localhost:8080/api/user/register', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
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
  }).then(data => 
    console.log(data)
    );
}

// displays user info if logged in 
function display() {
  fetch('http://localhost:8080/api/user/allusers')
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
