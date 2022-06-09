import React, {useState, useRef} from 'react'

function Calcul ({list, setGoTaquin, level }) {

    const [currentTarget, setCurrentTarget] = useState(null)
    const [currentSquare, setCurrentSquare] = useState(null)
    const [nextStep, setNextStep] = useState(0)

    const input = useRef(null);

    if(nextStep >= 15 ) {
        setGoTaquin(true)
    }

    function modifyInput(e, index) {
        setCurrentTarget(index)
        setCurrentSquare(e.target)
    }
 
    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleClick(e)
          }
    }
    
    function handleClick() {

        if (Number(input.current.value) === list[currentTarget][1] ){
            currentSquare.classList.add('greenSquare')

            setNextStep( nextStep + 1 )  

        }
        else{
            currentSquare.classList.remove('greenSquare')
        }
    }

    return (
        <div>
        <h1 className="levelList" >Liste n ° {level}</h1>
        <h1 className="regleCalcul">Trouver le résultat de chaque opération <br/> Cliquer sur une case pour sélectionner le calcul</h1>

        <div>
            <input ref={input}  onKeyPress={(e) => handleKeyPress(e)}  /><br/>
            {currentTarget !== null ? <button className="button" onClick={(e) => handleClick(e) } >Calcul : {list[currentTarget][0]}</button> : <div></div>}
        </div>

        <div className="grid">
            {list.map((item, index) => <div onClick={(e) => modifyInput(e, index)} className="item" key={item} >{item[0]}</div>)}
        </div>
    </div>
    )
}



export default Calcul