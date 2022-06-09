import React, { useState } from 'react'

import Level from '../level/level'

function RoundLevel({number, list, stopClock, startClock, resetClock}) {
    

    const [round, setRound] = useState(0)    
    const [tour, setTour] = useState(0)    
    const [win, setWin] = useState(false)

    let toStringGuess = list[0][round].toString()
    let guess = toStringGuess.split('')
    
    function nextRound() {
        setRound( round + 1)
        setWin(false)
        setTour(0)
        resetClock.current.click()
        startClock.current.click()
    }


    function getNote(tour) {
        if(tour === 1 ){return 20}if(tour === 2 ) {return 18}if(tour === 3 ) {return 16}if(tour === 4 ) {return 14}if(tour === 5 ) {return 12}if(tour === 6 ) {return 10}if(tour === 7 ) {return 8}if(tour === 8 ) {return 6}if(tour === 9 ) {return 4}if(tour ===10){return 2}
    }

    if(win){
        let note = getNote(tour)

        stopClock.current.click()

        return (
            <div>
                <h1>Félicitations vous avez réussi à deviner le mot !<br/><br/> Vous avez obtenu {note} / 20 </h1>
                <button className="button" onClick={() => nextRound()} > Cliquer ici pour le tour suivant</button>
            </div>
        )
    }

    if(tour === 10) {
        stopClock.current.click()
        return (
            <div>
                <h1>Vous n'avez pas réussi à deviner le mot<br/>
                Qui était : <strong className="code">{guess}</strong></h1>
                <button className="button" onClick={() => nextRound()} > Cliquer ici pour le tour suivant</button>
            </div>
        )
    }

    return( 
        <div>
            <Level number={number} setWin={setWin} guess={guess} tour={tour} setTour={setTour} win={win}/>
        </div>
    )

}


export default RoundLevel