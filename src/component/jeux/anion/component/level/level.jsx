import React, {useRef, useState, useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactPlayer from 'react-player'
import Webcam from "react-webcam";
import getOccurrence from '../../function/getOccurrence'
import route from '../../../../../service/userCall'
import axios from 'axios'

const Level = ({idLevel, setLevel,setArrayBlob, arrayBlob}) => {

    const [loose, setLoose] = useState(false)
    const [reponse, setReponse] = useState([])
    const [round, setRound] = useState(1)
    const [reason , setReason ] = useState()
    const [win, setWin] = useState()

    const {transcript, resetTranscript, listening,  browserSupportsSpeechRecognition} = useSpeechRecognition();
    const [recordedChunks, setRecordedChunks] = useState([]);

    const webcamRef = useRef(null)
    const mediaRecorderRef = useRef(null);
    
    const startMic = useRef(null)
    const reset = useRef(null)
    const video = useRef(null)

    const [dataUser, setDataUser] = useState('')

    let url = 'anion/video/'+idLevel+'/'+round+'.mp4'
    console.log(arrayBlob)

    useEffect(() => {
        route.name()
        .then((reponse) => {
           setDataUser(reponse.data.id)
        })
    }, [])

    useEffect(() => {

        if(reponse.length !== 0) {
            if(reponse[round-2][0]===''){setLoose(true); setReason('empty') }
            if(reponse[round-2].includes('oui')) {setLoose(true); setReason('oui')}
            if(reponse[round-2].includes('non')) {setLoose(true); setReason ('non')}
            if(round === 20){
                setWin(true)
            }

            if(getOccurrence(reponse, reponse[round-2]) >= 3) {
                setLoose(true);
                setReason('three')
            }
            
            if (round === 21) {
                setWin(true)
            }
        }
    }, [round])


    // DEBUT ENREGISTREMENT

    function startRec(){
        startMic.current.click()
        handleStartCaptureClick()

          setTimeout(function(){
            reset.current.click()
          }, 7000);
    }

    // FIN DE LA REPONSE

    function stopRec(){
        let transToArray = transcript.split(' ')
        setReponse(reponse => [...reponse, transToArray]);
        resetTranscript()
        setRound(round+1)
        newblob()
    }

    // GESTION DE LA WEBCAM ENREGISTREMENT 
    const handleStartCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current =  new MediaRecorder(webcamRef.current.stream, { mimeType: "video/webm"   });
        mediaRecorderRef.current.addEventListener("dataavailable",  handleDataAvailable   );
        mediaRecorderRef.current.start();
     }, [webcamRef, mediaRecorderRef]);
      const handleDataAvailable = React.useCallback(({ data }) => {
          if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));}
        },
        [setRecordedChunks]
      );

      function  newblob(){

        mediaRecorderRef.current.stop()
    
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
    
        setArrayBlob([...arrayBlob, blob])
    
        setRecordedChunks([])
        mediaRecorderRef.current.start()
    
      }

      const handleDownload = React.useCallback(() => {
        let formData = new FormData();
          let newArray = []
          for ( let i = 1; i < arrayBlob.length +1; i++ ){
            let file = new File([arrayBlob[i]], 'webCam'+i, {type : 'video/webm'})
            file.num = i
            newArray.push(file)
          }
    
          newArray.forEach((file, index) => {
            formData.append("files", file )     
    
          });

          formData.append('idUser', dataUser)

        axios.post(`https://back.testbenjaminc.fr/api/anion/avi/merge/${idLevel}`, formData ,{
            headers: {'Content-Type': 'multipart/form-data'},
            responseType: 'blob', 
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'file.webm'); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
      })
      
    if(!browserSupportsSpeechRecognition) {
        return (<span>Ton navigateur ne support pas notre jeu, veuillez essayer avec Google Chrome ou Safari</span>)
        };

    // FIN DU JEU PERDU

    if(loose){
        if(reason === 'oui'){
        return( <div className='center' ><br/><h1> Perdu Vous avez dit <strong>OUI</strong></h1>
                <h2>Vous avez perdu avec une note de {round-2} / 20 </h2>
                <h3>Voulez-vous retenter votre chance ou envoyer vos résultats</h3> 
                <button className="button" onClick={() => setLevel(false)} >Retenter</button>
                <br/>
                <h3>Ou envoyer votre exercice sur les réseaux</h3>
                <button className="button" onClick={() => handleDownload() }  >Privé</button>
                <button className="button" >Pulbic</button>
                 </div> ) }
        if(reason === 'non'){
            return( <div className='center' > <h1>Perdu Vous avez dit <strong>NON</strong></h1>
                <h2>Vous avez perdu avec une note de {round} / 20 </h2>
                <h3>Voulez-vous retenter votre chance ou envoyer vos résultats</h3> 
                <button className="button" onClick={() => setLevel(false)} >Retenter</button>
                <br/>
                <h3>Ou envoyer votre exercice sur les réseaux</h3>
                <button className="button" >Privé</button>
                <button className="button" >Pulbic</button>
                     </div> ) }
        if(reason === 'empty'){
            return( <div className='center' > <h1>Perdu Vous n'avez <strong>RIEN</strong> dit</h1>
                <h2>Vous avez perdu avec une note de {round} / 20 </h2>
                <h3>Voulez-vous retenter votre chance ou envoyer vos résultats</h3> 
                <button className="button" onClick={() => setLevel(false)} >Retenter</button>
                <br/>
                <h3>Ou envoyer votre exercice sur les réseaux</h3>
                <button className="button" >Privé</button>
                <button className="button" >Pulbic</button>

            </div> ) }
        if(reason === 'three'){
            return( <div className='center' > <h1>Perdu Vous avez donné <strong>TROIS</strong> fois la <strong>Même réponse</strong></h1>
                <h2>Vous avez perdu avec une note de {round} / 20 </h2>
                <h3>Voulez-vous retenter votre chance ou envoyer vos résultats</h3> 
                <button className="button" onClick={() => setLevel(false)} >Retenter</button>
                <br/>
                <h3>Ou envoyer votre exercice sur les réseaux</h3>
                <button className="button" >Privé</button>
                <button className="button" >Pulbic</button>
                     </div> ) }
        
     }
    
    // FIN DU JEU VICTOIRE

    if(win){
        return (
            <div className="center" >
                <h1>
                    Bravo tu as gagné, tu as obtenu 20 / 20<br/> Regarde Nous Danser<br/>
                </h1>
                <div className="videoCenter">
                     <ReactPlayer width='500px' height="auto"  autoPlay={true} playing={true} controls={true} url='anion/video/6DanseFinale/danseFinale.mp4'/>
                </div>
                <h2>Partage ton exercice sur les réseaux ! </h2>
                <br/>
                <button className='button' onClick={() => handleDownload()}>Privée</button>
                <button className='button' onClick={() => handleDownload()} >Public</button>
            </div>
        )
    } 

    // SCENARIO PERSO 

    if (idLevel === 7 && round === 2){
        return (
            <div>
                <br/>
                <div className="lightContainer"><strong>Parle lorsque la lumière est verte</strong> {listening ? <div className="greenLight light" ></div> : <div className="redLight light"></div>}</div>
                <div className='scenario button'>{reponse[round-2].join(' ')}</div>
                <div className="mainContainerAnion">           
                    <div className="webcamContainer"> 
                        <Webcam width="200px" height="400px" className='webCam' audio={true} ref={webcamRef} autoPlay={true}> </Webcam>
                    </div>
                    <div className='videoContainerIntro'>
                        <ReactPlayer width="200px" ref={video} autoPlay={true} playing={true} controls={true} url={url} onEnded={() => startRec()} />
                    </div>
                </div>
                <br/>
                <button className="hiddenBtn" ref={startMic} onClick={SpeechRecognition.startListening}></button>
                <button className="hiddenBtn" ref={reset}  onClick={() => stopRec()}></button>

            </div>
        )
    }

    if (idLevel === 8 && round === 3){
        return (
            <div>
                <br/>
                <div className="lightContainer"><strong>Parle lorsque la lumière est verte</strong> {listening ? <div className="greenLight light" ></div> : <div className="redLight light"></div>}</div>
                <div className='scenario button'>{reponse[round-2].join(' ')}</div>
                <div className="mainContainerAnion">           
                    <div className="webcamContainer"> 
                        <Webcam width="200px" height="400px" className='webCam' audio={true} ref={webcamRef} autoPlay={true}> </Webcam>
                    </div>
                    <div className='videoContainerIntro'>
                        <ReactPlayer width="200px" ref={video} autoPlay={false} playing={true} controls={true} url={url} onEnded={() => startRec()} />
                    </div>
                </div>
                <br/>
                <button className="hiddenBtn" ref={startMic} onClick={SpeechRecognition.startListening}></button>
                <button className="hiddenBtn" ref={reset}  onClick={() => stopRec()}> </button>

            </div>
        )
    }

    if (idLevel === 8 && round === 5){
        return (
            <div>
                <br/>
                <div className="lightContainer"><strong>Parle lorsque la lumière est verte</strong> {listening ? <div className="greenLight light" ></div> : <div className="redLight light"></div>}</div>
                <div className='scenario button'>{reponse[round-2].join(' ')}</div>
                <div className="mainContainerAnion">           
                    <div className="webcamContainer"> 
                        <Webcam width="200px" height="400px" className='webCam' audio={true} ref={webcamRef} autoPlay={true}> </Webcam>
                    </div>
                    <div className='videoContainerIntro'>
                        <ReactPlayer width="200px" ref={video} autoPlay={false} playing={true} controls={true} url={url} onEnded={() => startRec()} />
                    </div>
                </div>
                <br/>
                <button className="hiddenBtn" ref={startMic} onClick={SpeechRecognition.startListening}></button>
                <button className="hiddenBtn" ref={reset}  onClick={() => stopRec()}></button>

            </div>
        )
    }

    return (
        <div>
            <div>
                <br/>
                <div className="lightContainer"><strong>Parle lorsque la lumière est verte</strong> {listening ? <div className="greenLight light" ></div> : <div className="redLight light"></div>}</div>
                <div className="mainContainerAnion">
                   
                    <div className="webcamContainer"> 
                        <Webcam width="200px" height="400px" className='webCam' audio={true} ref={webcamRef} autoPlay={true}> </Webcam>
                    </div>
                    
                    <div className='videoContainerIntro'>
                        <ReactPlayer width="200px" ref={video} autoPlay={false} playing={true} controls={true} url={url} onEnded={() => startRec()} />
                    </div>
                </div>
                <br/>
                <button className="hiddenBtn" ref={startMic} onClick={SpeechRecognition.startListening}></button>
                <button className="hiddenBtn" ref={reset}  onClick={() => stopRec()}></button>

            </div>
        </div>
    )
} 

export default Level