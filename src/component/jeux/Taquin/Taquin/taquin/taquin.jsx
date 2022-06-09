import React, {useRef, useState} from 'react'
import EndGame from '../endGame/endGame'

function Taquin({currentList, orderList, endGame, setEndGame, level}){

    const [tour, setTour] = useState(0) 
    const grid = useRef(null)
    const [finalArray, setArray] = useState([])

    if (JSON.stringify(currentList) === JSON.stringify(orderList)){
        setEndGame(true)
    }

    function clickOnGrid(e){
    
        if(e.target.classList.contains('item')){

            let idTarget = Number(e.target.id)
         
                if (idTarget+1 >= 0 && idTarget+1 < 16 ){
                   
                    if (currentList[idTarget+1] === ''){
                   
                        let temp = currentList[idTarget+1]
                        currentList[idTarget+1] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                        setArray(currentList)
                    }
                }
                if (idTarget-1 >= 0 && idTarget-1 < 16 ){
                  
                    if (currentList[idTarget-1] === ''){
                        let temp = currentList[idTarget-1]
                        currentList[idTarget-1] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                        setArray(currentList)
                    }
                }

                if (idTarget+4 >= 0 && idTarget+4 < 16 ){
                  
                    if (currentList[idTarget+4] === ''){
                        let temp = currentList[idTarget+4]
                        currentList[idTarget+4] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                        setArray(currentList)
                    }
                }

                if (idTarget-4 >= 0 && idTarget-4 < 16 ){
                  
                    if (currentList[idTarget-4] === ''){
                        let temp = currentList[idTarget-4]
                        currentList[idTarget-4] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                        setArray(currentList)
                    }
                }
                setTour(tour + 1) 

                currentList.forEach((elem, index) => {
                    if (elem === orderList[index]){
                        let aa = document.getElementById(`${index}`)
                        aa.classList.add("greenItem");
                    }
                    else {
                        let aa = document.getElementById(`${index}`)
                        aa.classList.remove("greenItem");
                    }
                })  
            } 
        }



    if (endGame) {

        return (
            <EndGame finalArray={finalArray} orderList={orderList}/>
        )
    }

    return (
        <div className="taquin">      
            <h1 className='levelList'  >Liste n ° {level}</h1>
            <h1 className="regleTaquin">Mettre la liste dans l'ordre croissant <br/> en déplaçant la case vide en bas a droite</h1>

            <div onClick={(e) => clickOnGrid(e)} className="grid" ref={grid} >
                {currentList.map ((item, index) =>  <div className='item' id={index} key={index} >{item}</div> )}
            </div>

            <button className="button" onClick={() => setEndGame(true) } > Arrêter le jeu et passer à la note </button>
        </div>
    )

}


export default Taquin