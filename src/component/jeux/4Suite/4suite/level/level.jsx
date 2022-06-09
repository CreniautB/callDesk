import React, {useState} from 'react'
import Timer from 'react-compound-timer'
import sendList from './list'
import EndGame from '../endGame/endGame'
import Square from '../square/square'

import '../4suite.css'

function Level({level, chrono,  arrayRep, setArrayRep,}){

    const [ endGame, setEndGame ] = useState(false)

    const [note, setNote] = useState(0)
    const [tour, setTour] = useState(0)
    const [suite, setSuite] = useState(0)

    const list = sendList(level)

    function getAnswer(reponse, e) {
       
        let questionReponse = list[tour][2]
    
        if(questionReponse === reponse){
            setArrayRep( arrayRep => [...arrayRep,'oui'])
            if(suite === 3)
                {
                    setNote(note +1 )
                    setSuite(0)
                }
            else 
            {setSuite(suite + 1)}            
        }
        else {
            setArrayRep( arrayRep => [...arrayRep,'non'])
            setSuite(0)
        }

        setTour(tour +1)
    }

    if(tour === 64 || endGame){
        return( <EndGame note={note}/>)
    }
   
    return(
        <div className="suiteLevelContainer" >            
            
            <div className="countContainer">
                <div className="count button" > Question {tour +1 } / 64</div>
            </div>
            
            <button className="time button">

            <span>Il vous reste </span>
            <Timer
                    initialTime={chrono}
                    direction="backward"
                    checkpoints={[
                        {
                            time: 0,
                            callback: () => setEndGame(true)
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

        <div className="question">
        {list[tour][0]}
 
        </div>

        <div className="reponseContainer">
            <button className="button" onClick={() => getAnswer('OUI')} >Oui</button>
            <button className="button" onClick={() => getAnswer('')}>Non</button>
        </div>

        <div className="grilleReponse" >
                {list.map((item, i) => { return <Square key={i} item={item} index={i} tour={tour} arrayRep={arrayRep} /> })}
        </div>

    </div>
    )
}


export default Level