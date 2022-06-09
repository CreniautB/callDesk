import React, { useState } from "react";
import route from '../../../service/userCall'

import { Redirect, Route } from "react-router-dom";

const Signup = ({setLog, log}) => {

  const [errorLog, setErrorLog] = useState(false) 

  function signUp(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, pseudo: null, password: null };

    const form = submitEvent.target;

    user.email = form.emailAuth.value;
    user.pseudo = form.pseudo.value;
    user.password = form.passwordAuth.value;

    const userJson = JSON.stringify(user);

    // Envoie de la requete
    route.signup(userJson, setLog)
    .then(() => {
        route.login(userJson)
          .then((response) => {
            // Configuration du token via la réponse de l'appel a l'api
            const token = "token " + response.data.token
            localStorage.setItem("token", token);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("userRole", response.data.userRole);
            setLog(true)
          })
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
      <div className="signupDiv">
        <form className="signupForm" onSubmit={signUp}>

          <h2 className="formTitle">S'inscrire</h2>

          <label htmlFor="pseudo">Prénom</label>
          <input type="text" id="pseudo" />

          <label htmlFor="emailAuth">Email</label>
          <input type="email" id="emailAuth" />

          <label htmlFor="passwordAuth">Mot de passe</label>
          <input type="password" id="passwordAuth" />

          { errorLog ? <span className="errorLog">Mot de passe / email Incorrect</span>
          : <div></div>  
          }

          <button className="button" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    );
  }

export default Signup;