import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import IntroLevel from '../level/introLevel'
import './homePage.css'

function HomePageAnion () {

  const [idLevel, setLevel] = useState(false)
  const [ arrayBlob, setArrayBlob ] = React.useState([])

  
  function selectLevel(id) {
    setLevel(id)
}

    if (idLevel) {
      return (
        <IntroLevel idLevel={idLevel} setLevel={setLevel} setArrayBlob={setArrayBlob} arrayBlob={arrayBlob} />
      )
    }

    return (
        <div className="center" >
            <h1>
              Jeu du Ni Oui Ni Non
            </h1>
            <div className="videoContainerIntro">
              <ReactPlayer width="200px" controls={true} url='anion/video/intro/intro.mp4' />
            </div>

            <div className='listLevel'>
                <button className="button" key={1} onClick={(e) => selectLevel(1,e)}>Liste n°1</button>
                <button className="button" key={2} onClick={(e) => selectLevel(2,e)}>Liste n°2</button>
                <button className="button" key={3} onClick={(e) => selectLevel(3,e)}>Liste n°3</button>
                <button className="button" key={4} onClick={(e) => selectLevel(4,e)}>Liste n°4</button>
                <button className="button" key={5} onClick={(e) => selectLevel(5,e)}>Liste n°5</button>
                <button className="button" key={6} onClick={(e) => selectLevel(6,e)}>Liste n°6</button>
                <button className="button" key={7} onClick={(e) => selectLevel(7,e)}>Liste n°7</button>
                <button className="button" key={8} onClick={(e) => selectLevel(8,e)}>Liste n°8</button>
                <button className="button" key={9} onClick={(e) => selectLevel(9,e)}>Liste n°9</button>
                <button className="button" key={10} onClick={(e) => selectLevel(10,e)}>Liste n°10</button>
            </div>
          </div>
    )

}

export default HomePageAnion
