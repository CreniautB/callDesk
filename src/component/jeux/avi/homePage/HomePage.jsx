import React, { useState } from "react"
import ReactPlayer from 'react-player'
import VideoChapitre from "../videoChapitre/videoChapitre"
import Forms from "../forms/forms"

import '../avi.css'



function HomePage (list) {

    let endIt = false

    const [ arrayBlob, setArrayBlob ] = React.useState([])
    const [idChap, setIdChap] = useState(false)
    const [titleChap, setTitleChap] = useState(false)
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [idVideo, setIdVideo] = useState(1)
    const video = React.useRef(null)

    const [lastVideo, setLastVideo] = useState(false)
    

    function goToChapitre(idChapitre, e) {
        e.preventDefault();
        setTitleChap(e.target.innerHTML)
        setIdChap(idChapitre)
    }

    if (list.list[idChap] < idVideo){
        endIt = true
      }

    if (!idChap){
        return (
            <div>
                <br/>
                <div className="center homePageAvi">
                    
                    <div className='presentationContainer'>
                                            
                        <div className="videoContainerAvi">
                            <ReactPlayer
                                    className='react-player center'
                                    url= 'videoSource/0.Introduction/introduction.mp4'
                                    width='500px'
                                    height='auto'
                                    margin='auto'
                                    controls = {true}
                                />
                        </div>
                    </div>

                    <h1 className="titleAvi" >Vos Chapitres Disponibles</h1>

                    <ul className="menuList">
                                    
                        <button className="button"  onClick={(e) => goToChapitre(1, e)}> 1. Sujets Généraux</button>
                        <button className="button"  onClick={(e) => goToChapitre(2, e)} >2. Entretien D'embauche</button>
                        <button className="button"  onClick={(e) => goToChapitre(3, e)} >3. Téléphone</button>
                        <button className="button"  onClick={(e) => goToChapitre(4, e)} >4. Economie</button>
                        <button className="button"  onClick={(e) => goToChapitre(5, e)} >5. Hôtel, voyage, transport</button>
                        <button className="button"  onClick={(e) => goToChapitre(6, e)} >6. Speed Dating</button>
                    </ul>        

                    <h1 className="titleAvi" >Tarif</h1>

                    <div className='tarif'>
                            <button className='button'>9€ Le chapitre</button>
                            <button className='button' >45€ les 6 chapitres</button>
                        </div>
                    
                </div>
            </div>
            
        )
    }
    else{
        if(endIt){
            return(
            <Forms arrayBlob={arrayBlob} idChap={idChap} />
            ) 
        }
        else {
             return(
                <div>
                    <VideoChapitre  idChap={idChap} list={list}  setIdChap={setIdChap} titleChap={titleChap} endIt={endIt} setIdVideo={setIdVideo} idVideo={idVideo} recordedChunks={recordedChunks} setRecordedChunks={setRecordedChunks} arrayBlob={arrayBlob} setArrayBlob={setArrayBlob} video={video} lastVideo={lastVideo}/>
                </div>
                )
             }
        }



}


export default HomePage 