import React, {useState} from 'react'
import Timer from '../../../../../../node_modules/react-compound-timer'
import sendList from './list'
import Taquin from '../taquin/taquin'
import Calcul from '../calcul/calcul'

function Level({level, chrono}){

    const [endGame, setEndGame ] = useState(false)
    const [goTaquin, setGoTaquin] = useState(false)

    const list = sendList(level)

    let currentList = []
    let orderList = []

    list.forEach(element => {
        currentList.push(element[1])
        orderList.push(element[1])
    });

    orderList.sort(function(a, b) {
        if (a === '')
        {
            return 1
        }
        else {return a - b; } 
        });
    

    if (endGame && !goTaquin)
        {
            return (
                <h1 className="timeOut" >Temps écoulé vous avez perdu <br/> Retenter votre chance ! </h1>
            )
        }
    return ( 
        <div className="containerLvel">
            <br/>

            {!endGame ? <button className="time button">
                
                <span>Il vous reste </span>
                
                <Timer
                        initialTime={chrono}
                        direction="backward"
                        checkpoints={[
                            {
                                time: 0,
                                callback: () => setEndGame(true),
                            }
                        ]}
                    >
                        {() => (
                            <React.Fragment>
                                <Timer.Minutes/>: 
                                <Timer.Seconds/>
                            </React.Fragment>
                        )}
                    </Timer>

                </button> : <div> </div> }



            {goTaquin ? <Taquin currentList={currentList} orderList={orderList} endGame={endGame} setEndGame={setEndGame} level={level}/> : <Calcul list={list} setGoTaquin={setGoTaquin} level={level} /> }

        </div>
    )
}

export default Level
