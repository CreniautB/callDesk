import React from 'react'

import '../4suite.css'

function Square ({item, index, tour, arrayRep}) {

    if (index <= tour-1) {

        if (arrayRep[index] === 'oui'){

            return (
                <div className='square4Suite'>
                    {item[1]}
                </div>
            )
        }

        else {
            return (
                <div className="square4Suite notGoodSquare">
                    {item[1]}
                </div>
            )
        }
    }

    else {
        return (
            <div></div>
        )
    }


}

export default Square

