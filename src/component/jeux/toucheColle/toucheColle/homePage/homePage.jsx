import React, {useState} from 'react'

import Level from '../level/level'

function HomePageToucheColle() {

    const [level, setLevel] = useState(false)
    const [chrono, setChrono] = useState(false)
    const [level10, setLevel10] = useState(false)

    function selectLevel(id) {
        setLevel(id)
    }

    function selectLevel10(id) {
        setLevel(id)
        setLevel10(true)
    }

    if(level && chrono) {

        return (
            <Level  level={level} chrono={chrono} setChrono={setChrono} level10={level10} />
        ) 
    }

    if (level && !chrono){
        return(
            <div className="chronoChoiceContainer" >
                <h1>
                    Choix du chrono
                </h1>
                <button className="button" onClick={() => setChrono(60000)} >1 minute</button>
                <button className="button" onClick={() => setChrono(120000)} >2 minutes</button>
                <button className="button" onClick={() => setChrono(300000)} >5 minutes</button>
            </div>
        )
    }

    return (
      <div className="introExoContainer">
        
           <h1>
               Jeu du Touché Collé <br/>
           </h1>

           <h2 className="regle">
                Relier chaque mot de la première liste avec le mot de la seconde liste qui lui correspond.
                <br/> Si le mot est bien relié il devient <span className="vert" >VERT</span> sinon il devient <span className="rouge">ROUGE</span> 
            </h2>

            <h2>Choisir le niveau</h2>

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
                <button className="button" key={10} onClick={(e) => selectLevel10(10,e)}>Liste n°10</button>
            </div>
      </div>
    );
  }
  
  export default HomePageToucheColle;
  