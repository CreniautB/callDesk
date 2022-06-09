import React from 'react'

function EndGame({note}) {

    function calculNote(note){
        return  parseFloat(note * 20 / 109).toFixed(1)
    }

    return(
        <div className="endGameMath">
            <h1>Bravo, vous venez de finir l'exercice</h1>
            <h2>Vous avez obtenu la note de : {calculNote(note)} / 20</h2>
        </div>
    )
}

export default EndGame

