import HomePage from './homePage/HomePage';
import React from 'react'

function Avi() {

  const listChap = {
    1 : 17,
    2 : 18,
    3 : 18,
    4 : 18,
    5 : 18,
    6 : 18
  }

  return (
      <HomePage list = {listChap} /> 
  )

}

export default Avi;
