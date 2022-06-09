import React, { useState, useRef } from 'react'

import _ from 'lodash'
import Square from '../square/square'
import getAllIndexes from './getAllIndexes'

import '../codeSecret.css'

function Level ({level, guess, stopClock }) {
   

    const [array, setArray] = useState([])
    const [tour, setTour] = useState(0)    
    const[win, setWin] = useState(false)
    const input = useRef(null);
    
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleClick(e)
          }
    }

    function handleClick(e){
        if (input.current.value !== '' && input.current.value.length === level){
            let valueInput = input.current.value

            let currentArray = valueInput.split('')

            let newArray = [];

            if (_.isEqual(_.sortBy(guess), _.sortBy(currentArray))){
                setWin(true)
           }

            for(let i = 0;i < currentArray.length;i++){

                if(!guess.includes(currentArray[i])){
                    newArray.push({item: currentArray[i], color: 'red'});
                }
                if(guess.includes(currentArray[i])){ 

                    if( (getAllIndexes(guess, currentArray[i]).includes(i))){
                        newArray.push({item: currentArray[i], color: 'green'});
                    }
                    else {
                        newArray.push({item: currentArray[i], color: 'white'});
                    }
                }
            }
             
            setArray(oldArray => [...oldArray, newArray]);
            setTour(tour + 1)
        }
    }
  
    function getNote(tour) {
        if(tour === 1 ){return 20}if(tour === 2 ) {return 18}if(tour === 3 ) {return 16}if(tour === 4 ) {return 14}if(tour === 5 ) {return 12}if(tour === 6 ) {return 10}if(tour === 7 ) {return 8}if(tour === 8 ) {return 6}if(tour === 9 ) {return 4}if(tour ===10){return 2}
    }


    if(win){
        let note = getNote(tour)
        stopClock.current.click()
        return (
            <div className="center">
                <h1>Félicitation vous avez déchiffré le code !</h1>
                <h2>Vous avez obtenu {note} / 20</h2>
            </div>
        )

    }

    if(tour === 10) {
        
        stopClock.current.click()
        return (
            <h1>Vous n'avez pas réussi à déchiffrer le code<br/>
            Qui était : <strong className="code">{guess}</strong></h1>
        )
    }

    return(
        <div className='center levelCodeSecret'>

            <h1>Déchiffrer le code à {level} chiffres</h1>

            <h2 className="tourCount">Essai {tour} / 10</h2>

            <div className="inputContainer" >
                <input ref={input} onKeyPress={(e) => handleKeyPress(e)} /><br/>
                <button onClick={(e) => handleClick(e)} className='button' >Valider votre choix</button>
            </div>
                <div className="arrayContainer">
                
                {array.map((col, index) => (

                    <div className='colonne' key={index}>

                    {col.map((ligne,index) => (
                       <Square  key={index} content={ligne.item} color={ligne.color} />
                    ))}
                    </div>
                ))}
                </div>

        </div>
    
    )
}
export default Level