import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import Level from './level'
import './level.css'


function IntroLevel ({idLevel, setLevel, setArrayBlob, arrayBlob }) {

    const [intro, setIntro] = useState(false)


    if (intro){
        return(
         <Level idLevel={idLevel} setLevel={setLevel} setArrayBlob={setArrayBlob} arrayBlob={arrayBlob}  />
        )
    }

    return (
        <div className="center">
            <h2>Règles</h2>
            <h3>Ne pas dire Oui ou Non</h3>
            <h3>Ne pas donner trois fois la même réponse</h3>
            <h3>Si vous ne donner pas de réponse c'est perdu</h3>
            <h3>Série de 20 questions</h3>
            <div className="videoContainerIntro">
                 <ReactPlayer width="200px" controls={true} url='anion/video/intro/regle.mp4' /> 
            </div>
            <br/>
            <button className='button passLevel' onClick={() => setIntro(true)} >
                Passer à l'exercice
            </button>
        </div>
    )
}

export default IntroLevel