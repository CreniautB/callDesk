import React, { useState, useRef } from 'react'
import generate5 from './generate5'
import generate6 from './generate6'
import generate7 from './generate7'
import RoundLevel from '../roundLevel/roundLevel'
import Timer from 'react-compound-timer'

import '../codeMot.css'


function ChooseList({number}) {

    const [go, setGo] = useState(false)
    const [list, setList] = useState([])
    const stopClock = useRef(null)
    const startClock = useRef(null)
    const resetClock = useRef(null)
    
    function selectLevel(number, idList) {

        if(number === 7){

            let newlist = generate7(idList)
            setList([...list, newlist])
            setGo(true)
        }
        if(number === 6){
            let newlist = generate6(idList)
            setList([...list, newlist])
            setGo(true)

        }
        if(number === 5){

            let newlist = generate5(idList)
            setList([...list, newlist])
            setGo(true)
        }
     
    }

    if(go){
        return (
            <div className="chronoChoiceContainer">
            
            <div className="button timer">

                <span>Votre Chrono</span>

                <Timer
                    initialTime={0}
                >
                    {({stop, reset, start }) => (
                        <React.Fragment>
                            <div>
                                <Timer.Minutes /> : <Timer.Seconds /> 
                            </div>
                            <div>
                                <button className="btnHidden" ref={stopClock} onClick={stop}>Stop</button>
                                <button className="btnHidden" ref={resetClock} onClick={reset}>Stop</button>
                                <button className="btnHidden" ref={startClock} onClick={start}>Stop</button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
                </div> 

            <RoundLevel list={list} number={number} stopClock={stopClock} startClock={startClock} resetClock={resetClock} /> 
        </div>
        )
    }

    return (
        <div className="chronoChoiceContainer">
            <br/>
            <h1>Choisir une liste</h1>
            <button className="button" key={1} onClick={(e) => selectLevel(number, 1,e)}>Liste 1</button>
            <button className="button" key={2} onClick={(e) => selectLevel(number, 2,e)}>Liste 2</button>
            <button className="button" key={3} onClick={(e) => selectLevel(number, 3,e)}>Liste 3</button>
            <button className="button" key={4} onClick={(e) => selectLevel(number, 4,e)}>Liste 4</button>
            <button className="button" key={5} onClick={(e) => selectLevel(number, 5,e)}>Liste 5</button>
            <button className="button" key={6} onClick={(e) => selectLevel(number, 6,e)}>Liste 6</button>
            <button className="button" key={7} onClick={(e) => selectLevel(number, 7,e)}>Liste 7</button>
            <button className="button" key={8} onClick={(e) => selectLevel(number, 8,e)}>Liste 8</button>
            <button className="button" key={9} onClick={(e) => selectLevel(number, 9,e)}>Liste 9</button>
            <button className="button" key={10} onClick={(e) => selectLevel(number, 10,e)}>Liste 10</button>
        </div>
        )      
        
}


export default ChooseList