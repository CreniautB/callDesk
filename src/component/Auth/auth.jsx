import React, {useState} from 'react'
import Login from './login/login'
import Signup from './signUp/signUp'
import './log.css'

const Auth = ({log, setLog}) => {

    return (
        <div>

        <div className="logoContainer">
            <img src="logo.png" alt="logo" className="logo"></img>
        </div>

        <div className="intro">
            <h1>Qui sommes nous?</h1>
            
            <p className="paraBienvenue" >
            Notre objectif est de vous permettre de vous exprimer en anglais quelques minutes par jour ou par semaine afin de vous habituer à la prise de la parole.<br/><br/>

            Cette méthode peu onéreuse est efficace car souvent le blocage vient du fait qu'on ne s'exprime pas régulièrement si bien qu'on a tendance à tout oublier à terme.<br/><br/>

            La fluidité de la prise de parole dans une langue étrangère se perd très vite et ne peut se conserver que grâce une insertion dans un milieu où l'on peut s'exprimer.<br/><br/>

            La possibilité de converser à tout moment  est un atout.
            </p>
            </div>
            <div className="auth">
                <Login setLog={setLog} log={log} />
                <Signup setLog={setLog} log={log} />
            </div>
        </div>
        )


}


export default Auth