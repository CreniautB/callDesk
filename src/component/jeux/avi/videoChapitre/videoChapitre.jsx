import React, { useEffect, useState, useRef } from "react";

import AudioRecorder from 'react-audio-recorder';

import VideoDisplayed from "../videoDisplayed/videoDisplayed";

import Webcam from 'react-webcam'


const VideoChapitre = ({list,idChap,titleChap, setRecordedChunks, recordedChunks, idVideo, setIdVideo, arrayBlob, setArrayBlob, video}) => {

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const [capturing, setCapturing] = useState(false);
  const [play, setPlay] = useState(false)

  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);


  

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user", 
  };

  console.log(list.list[idChap])

  // reset timer after click
  function reset() {
    setSeconds(60);
  }

  // if run out of time => next video
  if(seconds <= 0){
    clickNext()
  }

  // Timer
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  })

  // Create new blob for webcam
  function  newblob(){
    mediaRecorderRef.current.stop()
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    setArrayBlob([...arrayBlob, blob])
    setRecordedChunks([])
    mediaRecorderRef.current.start()
  }

  // click in next video button
  function clickNext() {
      setIdVideo(idVideo+1);
      reset();
      newblob();
  }  

  // Start the recording
  const handleStartCaptureClick = React.useCallback(() => {
    setIsActive(true)
    const promise = new Promise((resolve, reject) => {
      setPlay(true);
      setCapturing(true);
      resolve('ok')
    })
    promise.then(() =>{
      mediaRecorderRef.current =  new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    })
  }, [webcamRef, setCapturing, mediaRecorderRef]);


  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }},[setRecordedChunks]
  );

  return (
      <div className='videoChapContainerAvi center'>

        <button className='button titleChapitre'>{titleChap}</button>
        <br/>
        <button className='button'>Vidéo <strong>{idVideo}</strong> sur {list.list[idChap]}</button>
        <br/>
        {!capturing ? (
                <button className='button startVideoBtn' onClick={handleStartCaptureClick} >
                  Cliquez ici pour lancer la video<br/> Et commencez l'enregistrement</button>
                      ) : ( <div></div>) 
                      }

        <div className="mainContainer">

              <div className='videoContainerCours' >

                <VideoDisplayed idVideo ={idVideo} idChap = {idChap} video={video} play={play} ></VideoDisplayed>
                <div className='controllersVideo'>
                  {capturing ? (<button className='button ctrlBtn' onClick={() => clickNext() }> Video Suivante </button>) : (<div></div>)}
                </div>
            </div>

          <div className='webCamContainer'>
          <Webcam width="400px" className='webCam' audio={true} ref={webcamRef} autoPlay={true} videoConstraints={videoConstraints} muted={true} ></Webcam> 
          </div>

          <AudioRecorder />

        </div>
        <br/>
        <button className="button" >Il vous reste <strong>{seconds}</strong> secondes<br/>pour cette question</button>

      </div>
    )
}

export default VideoChapitre