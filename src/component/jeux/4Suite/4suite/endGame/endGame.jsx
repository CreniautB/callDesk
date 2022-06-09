import React from 'react'

function EndGame ({note}) {

    console.log(note)
    function getNote(note) {
        let newnOte = (note * 20) / 16
        return newnOte
    }

    const newNote = getNote(note)

    return (
        <div className="endGame" >
            <h1>Bravo vous venez de finir l'exercice</h1>
                <h2 className="note">Vous avez obtenu <strong>{newNote} / 20</strong></h2>
            </div>
    )

}


export default EndGame