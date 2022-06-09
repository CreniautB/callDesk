import React, {useState} from 'react'

import Timer from 'react-compound-timer'

import sendList from './list'
import sendRep from './rep'
import EndGame from '../endGame/endGame'

import sendListName from './nameList'

import '../toucheColle.css'

function Level({level, chrono, level10}) {

    let actualList = sendList(level)
    let rep = sendRep(level)
    let title = sendListName(level)

    const [reponse, setReponse ] = useState(null)
    const [firstReponse, setFirstReponse] = useState(null)
    const [note, setNote] = useState(0)
    const[canClick, setCanClick] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const [tour, setTour] = useState(0)


    function firstClick(e, item, reponse) {
        if (!canClick)
        {
            if(e.target.style.background === 'red' || e.target.style.background === 'green' || e.target.style.background === 'grey' ){
                setCanClick(false)
            }
            else {
                e.target.style.background="grey"
                setFirstReponse(e)
                setReponse(reponse)
                setCanClick(true)
            }

        }
    }

    function secondClick(e, item) {
        
        if(canClick){
                if (item === reponse) {
                    e.target.style.background='green'
                    e.target.style.color='white'
                    firstReponse.target.style.background='green'
                    firstReponse.target.style.color='white'
                    setNote(note + 1)
                    setCanClick(false)
                    setTour(tour +1 )
                }
                else {
                    firstReponse.target.style.background='red'
                    e.target.style.background='red'
                    firstReponse.target.style.color='white'
                    e.target.style.color='white'
                    setCanClick(false)
                    setTour(tour +1 )
                }
        }
    }



    if (endGame || tour === 20){
        return (
                <EndGame note={note} />
            )
    }

    return (
        <div className="toucheColleLevelContainer">
            <h2>{title}</h2>
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

            <div className="listContainerToucheColle">
                <div className="list">
                    {actualList.map( item => <button onClick={(e) => firstClick(e, item[0], item[1])} className="squareToucheColle" key={item[0]} >{item[0]}</button> )}
                </div>
                <div className="list">
                    {rep.map( item => <button  onClick={(e) => secondClick(e, item[0])}  className="squareToucheColle" key={item[0]} >{item[0]}</button>)}
                </div>
            </div>
            
            {level10 ? <div className="containerMesure"> <div className="button btnMesure" >ml = millilitre</div> <div className="button btnMesure" >cl = centilitre</div>  <div className="button btnMesure" >h = hectare</div> <div className="button btnMesure" >m3 = mètre cube </div> <div className="button btnMesure" >km = kilomètre</div> <div className="button btnMesure" >p = pouce</div>  <div className="button btnMesure" >a = are</div>
                            <div className="button btnMesure" >dl = décilitre</div> <div className="button btnMesure" > dm = décimètre </div> <div className="button btnMesure" >cm = centimètre</div> <div className="button btnMesure" >mm = millimètre</div>
                            <div className="button btnMesure" > t = tonne</div> <div className="button btnMesure" > q = quintal</div> <div className="button btnMesure" >kg = kilo</div> <div className="button btnMesure" >g = gramme</div> <div className="button btnMesure" >mg = milligramme</div>
                            <div className="button btnMesure" >min = minute</div> <div className="button btnMesure" >s = seconde</div> <div className="button btnMesure" >oz = once liquide</div> <div className="button btnMesure" > lb = livre(pound)</div>
            </div> : <div></div> }

        </div>
    );
  }
  
  export default Level;
  