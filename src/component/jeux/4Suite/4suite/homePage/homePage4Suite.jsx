import React, {useState} from 'react'
import Level from '../level/level'

function HomePage4Suite() {

    const [level, setLevel] = useState(false)
    const [chrono, setChrono] = useState(false)
    const [arrayRep, setArrayRep] = useState([])

    function selectLevel(id) {
        setLevel(id)
    }

    if(level && chrono) {
        return (
            <Level level={level} chrono={chrono} arrayRep={arrayRep} setArrayRep={setArrayRep} />
        ) 
    }

    if (level && !chrono){
        return(
            <div className="chronoChoiceContainer" >
                <h1>
                    Choix du chrono
                </h1>
                <button className="button" onClick={() => setChrono(600000)} >10 minutes</button>
                <button className="button" onClick={() => setChrono(900000)} >15 minutes</button>
                <button className="button" onClick={() => setChrono(1500000)} >25 minutes</button>
            </div>
        )
    }

    return (
      <div className="introExoContainer">
        
           <h1>
               Jeu du 4 à la suite<br/>
           </h1>

           <h2 className="regle">
                Répondre aux questions par oui ou non 
                <br/> Vous devez répondre juste à 4 questions à la suite pour marquer 1 point.
            </h2>

            <h2 >Choisir le niveau</h2>

           <div>
                <button className="button" key={1} onClick={(e) => selectLevel(1,e)}>Liste n°1</button>
                <button className="button" key={2} onClick={(e) => selectLevel(2,e)}>Liste n°2</button>
                <button className="button" key={3} onClick={(e) => selectLevel(3,e)}>Liste n°3</button>
                <button className="button" key={4} onClick={(e) => selectLevel(4,e)}>Liste n°4</button>
                <button className="button" key={5} onClick={(e) => selectLevel(5,e)}>Liste n°5</button>
                <button className="button" key={6} onClick={(e) => selectLevel(6,e)}>Liste n°6</button>
                <button className="button" key={7} onClick={(e) => selectLevel(7,e)}>Liste n°7</button>
                <button className="button" key={8} onClick={(e) => selectLevel(8,e)}>Liste n°8</button>
                <button className="button" key={9} onClick={(e) => selectLevel(9,e)}>Liste n°9</button>
                <button className="button" key={10} onClick={(e) => selectLevel(10,e)}>Liste n°10</button>
            </div>
      </div>
    );
  }

export default HomePage4Suite