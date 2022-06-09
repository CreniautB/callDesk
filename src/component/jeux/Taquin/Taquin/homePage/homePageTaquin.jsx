import React, {useState} from 'react'
import Level from '../level/level'

function HomePage() {

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
            <div>
                <h1 className="chronoChoice">
                    Choix du chrono
                </h1>
                <button className="button" onClick={() => setChrono(300000)} >5 minutes</button>
                <button className="button" onClick={() => setChrono(600000)} >10 minutes</button>
                <button className="button" onClick={() => setChrono(900000)} >15 minutes</button>
                <button className="button" onClick={() => setChrono(1800000)} >30 minutes</button>
            </div>
        )
    }

    return (
      <div className="homePageTaquin">
        
           <h1>
               Jeu du Taquin<br/>
           </h1>

           <h2 className="regle">
                    Selon le principe du Taquin on ne déplace qu'une case à la fois
                <br/> Trouver les résultats des opérations puis les mettre dans l'ordre croissant
                <br /> Si la case est à la bonne place elle devient <span className="green" >Verte</span> sinon elle reste <span className="orange" >Orange</span>
            </h2>

            <div className='levelChoice' >Choisir une liste</div>

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

export default HomePage