import React from 'react' 

function Square({ content, color }){


    return(
        <div className="square" style={{background: color}} >
            {content}
        </div>
    )

}


export default Square