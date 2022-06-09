import React, {useState} from 'react'
import Square from '../square/square'
import _ from "lodash";

import sendList from './list';
import Timer from '../../../../../../node_modules/react-compound-timer'

import EndGame from '../endGame/endGame';

import '../math.css'

function Level({level, chrono}) {
   
    const [tour, setTour] = useState(0)
    const [note, setNote] = useState(0)
    
    let actualList = sendList(level)
   
    function getAnswer(num, e) {
        let question =  Number(actualList[tour][1])
        if(question === num){
            e.target.style.background="green"
            setNote(note + 1)
        }
        else {
        if (e.target.style.background==="green"){
                setNote(note - 1)
            }
            e.target.style.background="red"
        }
        setTour(tour +1)
    }

    if (tour === 109 ){
        return( 
            <EndGame note={note} />
        )
    }

    return ( 

        <div className="mainLevelMath">
            <button className="calculMath button">{actualList[tour][0]}</button>
            <div className="squareContainerMath">
                {_.times(110, (i) => (
                <Square key={i} num={i} getAnswer={getAnswer}/>
            ))}
            </div>
            <button className="timeMath button">
                <span>Il vous reste </span>
                <Timer
                        initialTime={chrono}
                        direction="backward"
                        checkpoints={[
                            {
                                time: 0,
                                callback: () => setTour(109)
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
            </button>
        </div>
    
    )
}


export default Level

