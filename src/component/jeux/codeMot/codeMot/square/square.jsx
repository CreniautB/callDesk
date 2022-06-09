import React from 'react' 

function Square({ content, color, fontColor }){


    return(
        <div className="square" style={{background: color, color : fontColor}} >
            {content}
        </div>
    )

}


export default Square