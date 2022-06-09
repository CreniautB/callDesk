import React, { useState, useRef } from 'react'

import _ from 'lodash'
import Square from '../square/square'
import getAllIndexes from './getAllIndexes'

import '../codeMot.css'

function Level ({number, setWin, guess,tour, setTour, win }) {
   
    const [array, setArray] = useState([])

    const input = useRef(null);
        
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleClick(e)
          }
    }

    function handleClick(e){

        if (input.current.value !== '' && input.current.value.length === number){
            let valueInput = input.current.value.toUpperCase()
            let currentArray = valueInput.split('')

            let newArray = [];

            if (_.isEqual(_.sortBy(guess), _.sortBy(currentArray))){
                setWin(true)
           }

            for(let i = 0;i < currentArray.length;i++){

                if(!guess.includes(currentArray[i])){
                    newArray.push({item: currentArray[i], color: 'orange', fontColor : 'white'});
                }
                if(guess.includes(currentArray[i])){ 

                    if( (getAllIndexes(guess, currentArray[i]).includes(i))){
                        newArray.push({item: currentArray[i], color: 'rgba(17, 209, 69, 0.95)', fontColor : 'white'});
                    }
                    else {
                        newArray.push({item: currentArray[i], color: 'white', fontColor : 'black'});
                    }
                }
            }
             
            if(!win){
                setArray(oldArray => [...oldArray, newArray]);
                setTour(tour + 1)
            }
        }
    }



    return(
        <div className='levelMotCode'>

            <h1>Devinez le mot de {number} lettres</h1>

            <div className="tourCount" >Essai {tour} / 10</div>

            <div className="inputContainerCodeMot" >
                <input ref={input} onKeyPress={(e) => handleKeyPress(e)} /><br/>
                <button onClick={(e) => handleClick(e)} className='button' >Valider votre choix</button>
            </div>
                <div className="arrayContainer">
                
                {array.map((col, index) => (

                    <div className='colonne' key={index}>

                    {col.map((ligne,index) => (
                       <Square  key={index} content={ligne.item} color={ligne.color} fontColor={ligne.fontColor} />
                    ))}
                    </div>
                ))}
                </div>

        </div>
    
    )
}
export default Level