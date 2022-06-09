import React, {useState, useRef} from 'react'
import Level from '../level/level'

import generate from './generate'
import Timer from 'react-compound-timer'


function HomePage() {

    const stopClock = useRef(null)
    const [level, setLevel] = useState(false)
    
    function selectLevel(id) {
        setLevel(id)
    }

    if(level) {
        
        const guessString = generate(level)
        const guess = guessString.split('')
        return (
            <div>
            
            <div className="button timerCodeSecret">

            <span>Votre Chrono</span>

            <Timer
                initialTime={0}
            >
                {({stop }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes /> : <Timer.Seconds /> 
                        </div>
                        <div>
                            <button className="btnHidden" ref={stopClock} onClick={stop}>Stop</button>
                        </div>
                    </React.Fragment>
                )}
            </Timer>
          </div> 

            <Level  level={level} guess={guess} stopClock={stopClock} />
            </div>
        ) 
    }


    return (
      <div className="introExoContainer">
          <br/>
           <h1 >
               Jeu du Code Secret<br/>
           </h1>

           <h2 className="regle">
                Déchiffrez le code secret
                <br/> Si le chiffre est dans la bonne position la case devient <strong className="vert">Verte</strong><br/>
                Si le chiffre est présent dans le code la case devient <strong>Blanche</strong><br/>
                Sinon elle devient <strong className="orange" >Orange</strong>
            </h2>

           <div>
                <button className="button" key={1} onClick={(e) => selectLevel(2,e)}>Code à 2 chiffres</button>
                <button className="button" key={2} onClick={(e) => selectLevel(3,e)}>Code à 3 chiffres</button>
                <button className="button" key={3} onClick={(e) => selectLevel(4,e)}>Code à 4 chiffres</button>
                <button className="button" key={4} onClick={(e) => selectLevel(5,e)}>Code à 5 chiffres</button>
   
            </div>
      </div>
    );
  }

export default HomePage