import React from 'react'


function EndGame ({finalArray, orderList }) {

    let note = 5

    finalArray.forEach((elem, index) => {
        if(elem === orderList[index]){
            note ++
        }
    })

    if (note > 20){
        note = 20
    }

    return (
        <div> 
            <h1 className="endGame">Bravo vous venez de finir le jeu <br/> Vous avez obtenu {note} / 20</h1>
        </div>
    )
}

export default EndGame