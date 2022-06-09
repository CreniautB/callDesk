import React from 'react'


function Square( {num, getAnswer} )  {

    return ( 
        <div className="square" onClick={(e) => getAnswer(num, e)} >
             {num}
        </div>
    )
}


export default Square

