import React, { useRef, useState } from "react";
import route from '../../../service/userCall'

import { Redirect, Route } from "react-router-dom";


const Login = ({setLog, log}) => {

  const [errorLog, setErrorLog] = useState(false) 
  
  const form = useRef(null)

  function login(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, password: null };

    user.email = form.current.email.value;
    user.password = form.current.password.value;

    const userJson = JSON.stringify(user);

    // Envoie de la requette,
    route.login(userJson, setLog)
    .then((response) => {
        const token = "token " + response.data.token
        localStorage.setItem("token", token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userRole", response.data.userRole);
        setLog(true)
    })
    .catch(() => {
      setErrorLog(true)
    });
  }

  if ( log ) {
    return (
      <Route>
        <Redirect to="/homePage" />
      </Route>
    );
  }


  return (

    <div className="loginDiv">

      <form ref={form} className="loginForm" onSubmit={login}>

        <h2 className="formTitle">Se connecter</h2>

        <label htmlFor="email">Email</label>
    
        <input type="email" id="email" />

        <label htmlFor="password">Mot de passe</label>

        <input type="password" id="password" />

        { errorLog ? <span className="errorLog">Mot de passe / email Incorrect</span>
          : <div></div>  
      }

        <button className="button" type="submit">
            Connexion
        </button>
      </form>
    </div>
  );
};

export default Login;