import React, {useState} from 'react'

import Level from '../level/level';

function HomePage()  {

    const [level, setLevel] = useState(false)
    const [chrono, setChrono] = useState(false)

    function selectLevel(id, e) {
        setLevel(id)
    }

    function selectChrono(time) {
        setChrono(time)
    }

    if(level && chrono) {
        return (
            <Level  level={level} chrono={chrono} setChrono={selectChrono} />
        ) 
    }

    if (level && !chrono){
        return(
            <div className="chronoChoiceContainer">
                <h1>
                    Choix du chrono
                </h1>
                <button className="button"  onClick={() => selectChrono(420000)} >7 minutes</button>
                <button className="button"  onClick={() => selectChrono(600000)} >10 minutes</button>
                <button className="button"  onClick={() => selectChrono(900000)} >15 minutes</button>
                <button className="button"  onClick={() => selectChrono(1200000)} >20 minutes</button>
                <button className="button"  onClick={() => selectChrono(2100000)} >35 minutes</button>
            </div>
        )
    }

    return ( 
        <div className="introExoContainer">
            <div className="header">
                <h1>Calcul Mental </h1>
                <h2>Trois niveaux disponibles</h2>
            </div>

            <div className="levelSelection">
                <div>
                    <h2>Niveau Facile</h2>
                    <button className="button"  key={1} onClick={(e) => selectLevel(1, e)}>Liste n°1</button>
                    <button className="button"  key={2} onClick={(e) => selectLevel(2,e)}>Liste n°2</button>
                    <button className="button"  key={3} onClick={(e) => selectLevel(3,e)}>Liste n°3</button>
                </div>
            <div>
                    <h2>Niveau Moyen</h2>
                    <button className="button"  key={4} onClick={(e) => selectLevel(4,e)}>Liste n°4</button>
                    <button className="button"  key={5} onClick={(e) => selectLevel(5,e)}>Liste n°5</button>
                    <button className="button"  key={6} onClick={(e) => selectLevel(6,e)}>Liste n°6</button>
                    <button className="button"  key={7} onClick={(e) => selectLevel(7,e)}>Liste n°7</button>
                </div>
                <div>
                    <h2>Niveau Difficile</h2>
                    <button className="button"  key={8} onClick={(e) => selectLevel(8,e)}>Liste n°8</button>
                    <button className="button"  key={9} onClick={(e) => selectLevel(9,e)}>Liste n°9</button>
                    <button className="button"  key={10} onClick={(e) => selectLevel(10,e)}>Liste n°10</button>
                </div>
            </div>

        </div>
    )}
        
export default HomePage
