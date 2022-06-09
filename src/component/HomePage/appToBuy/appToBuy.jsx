import React, {useEffect, useState} from 'react'

const AppToBuy = ({ app, setAppToBuy, appToBuy }) => {

    console.log(appToBuy)

    return (
        
        <div>

            {appToBuy ? <button className="button" onClick={() => setAppToBuy(false)} >Call Desk</button> : <div></div>}

            <h1>{app}</h1>

            <p>

            </p>
        </div>
    )
 
}


export default AppToBuy