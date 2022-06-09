import React from "react";
import ReactPlayer from 'react-player'

const VideoDisplayed = ({idVideo, idChap, video, play}) => {

    let url = 'videoSource/'+idChap+'/'+idVideo+'.mp4'



    return (
    <div className='videoCours'>
         <ReactPlayer
                className='react-player fixed-bottom'
                url= {url}
                width='400px'
                height='auto'
                controls = {true}
                ref = {video}
                playing = {play}
            />
    </div>
    )
};


export default VideoDisplayed