import React from 'react'

function EndGame({note}) {

    return (
        <div className="endGame" >
            <h1>Bravo vous venez de finir</h1>
            <h2>Vous avez obtenu {note} / 20 </h2>
        </div>
    )

}

export default EndGame