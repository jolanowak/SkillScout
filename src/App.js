import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dodany nowy stan

  const handleLoginFormClick = () => {
    setShowLoginForm(true);
    setShowRegistrationForm(false);
  };

  const handleRegistrationFormClick = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(true);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true); // Ustawienie stanu na "zalogowany"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" alt="SkillScout logo" className="logo" />
        <div className="login-container">
          {isLoggedIn ? ( // Nowa wersja dla zalogowanego użytkownika
             <div>
             <p>Jesteś zalogowany!</p>
             <button onClick={() => setIsLoggedIn(false)}>Wyloguj się</button>
           </div>
          ) : ( // Stara wersja dla niezalogowanego użytkownika
            <div>
              <button onClick={handleLoginFormClick}>Zaloguj się</button>
              <button onClick={handleRegistrationFormClick}>Utwórz konto</button>
              {showLoginForm && (
                <form onSubmit={handleLoginSubmit}>
                  <label>
                    <input type="text" placeholder="Login" className="login-input" />
                  </label>
                  <label>
                    <input type="password" placeholder="Hasło" className="login-input" />
                  </label>
                  <button type="submit" className="button1">
                    Zaloguj
                  </button>
                </form>
              )}
              {showRegistrationForm && (
                <form>
                  <label>
                    <input type="text" placeholder="Imię" className="login-input" />
                  </label>
                  <label>
                    <input type="text" placeholder="Nazwisko" className="login-input" />
                  </label>
                  <label>
                    <input type="text" placeholder="Zawód" className="login-input" />
                  </label>
                  <label>
                    <input type="text" placeholder="Miasto" className="login-input" />
                  </label>
                  <label>
                    <input type="email" placeholder="E-mail" className="login-input" />
                  </label>
                  <label>
                    <input type="password" placeholder="Hasło" className="login-input" />
                  </label>
                  <button className="button2">Utwórz konto</button>
                </form>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;