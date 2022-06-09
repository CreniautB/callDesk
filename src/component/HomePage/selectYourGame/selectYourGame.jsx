import React, {useEffect, useState} from 'react'

import calls from '../../../service/application'

// Import des jeux/apli disponibles

import Math from '../../jeux/math/math'
import Avi from '../../jeux/avi/App'
import ToucheColle from "../../jeux/toucheColle/toucheColle"
import Suite4 from '../../jeux/4Suite/4Suite'
import Taquin from '../../jeux/Taquin/taquin'
import CodeChiffre from '../../jeux/codeChiffre/codeChiffre'
import CodeMot from '../../jeux/codeMot/codeMot'
import Anion from '../../jeux/anion/anion'
import Pdf from '../../jeux/pdf/pdf'

import AppToBuy from '../appToBuy/appToBuy'

// Import des Applications page de paiments

const SelectYourGame = ({game, setGame}) => {

    const [whichGame, setWichGame] = useState('')
    const [application, setApplication] = useState([])
    const [appToBuy, setAppToBuy] = useState(false)
    const [wichAppToBuy, setWichAppToBuy] = useState('')

    const allApplis = calls.Applis

    useEffect(() => {
        calls.getAllApp()
        .then((reponse) => {
           setApplication(reponse.data)
        })
    }, [])

    if (whichGame==='calculmental' && game) { return (<Math />)}
    if (whichGame==='avi'&& game) {return (<Avi/>)}
    if (whichGame==='touchecolle'&& game) {return (<ToucheColle/>)}
    if (whichGame==='4àlasuite'&& game) {return (<Suite4/>)}
    if (whichGame==='taquin'&& game) {return (<Taquin/>)}
    if (whichGame==='codesecret'&& game) {return (<CodeChiffre/>)}
    if (whichGame==='motcaché'&& game) {return (<CodeMot/>)}
    if (whichGame==='anion'&& game) {return (<Anion/>)}
    if (whichGame==='livrevocabulaire'&& game) {return (<Pdf/>)}

    if(appToBuy){
        return(
            <AppToBuy app={wichAppToBuy} setAppToBuy={setAppToBuy} appToBuy={appToBuy} />
        )
    }

    // Fonction pour les applications payables

    function goToAppli(name){
        const formatName =  name.replace(' ', '')
        formatName.toLowerCase()
        setWichGame(formatName)
        setGame(true)
    }

    function goToAppliToBuy(title){
        setWichAppToBuy(title)
        setAppToBuy(true)
    }   

    return (
        <div>
            <h1>
                Bienvenue sur Call Desk 
            </h1>
            <div className="selectProduct">
                <h2>Tous Nos Produits</h2>

                {allApplis.map((appli, i)=> (
                     <button className='button gameBtn' key={i} onClick={() => goToAppliToBuy(appli) } >{appli}</button>))}
               </div>

                <div className="selectGame">
                    <h2>Vos Applications Disponibles</h2>
                    
                    {application.map((appli, i )  => (
                        <button className='button gameBtn' key={i} onClick={() => goToAppli(appli.title) }>{appli.title}</button>))}
            </div>
        </div>
    )
}


export default SelectYourGame