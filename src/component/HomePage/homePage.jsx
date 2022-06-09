import React, {useEffect, useState} from 'react'
import SelectYourGame from './selectYourGame/selectYourGame'
import './homePage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignOutAlt } from '@fortawesome/fontawesome-free-solid'

import { Redirect, Route } from "react-router-dom";

const HomePage = ({log, setLog}) => {

    const [game, setGame] = useState(false)
    

    function disconnect() {
        setLog(false)
    }

    if(!log){
        return (
            <Route>
              <Redirect to="/" />
            </Route>
          );
    }

    return (
        <div className="center">

        {/* <FontAwesomeIcon icon={faSignOutAlt} className=' button deconnexion' onClick={() => disconnect() } />        */}

        <div className="logoContainer">
            <img src="logo.png" alt="logo" className="logo"></img>
        </div>

        {game ? <button className="button" onClick={() => setGame(false)} >Call Desk</button> : <div></div>}

            <div>
                <SelectYourGame game={game} setGame={setGame}/>
            </div>

        </div>

    )
 
}


export default HomePage