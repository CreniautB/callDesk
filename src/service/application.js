import axios from 'axios';
const routepp = '/appli'


const getAllApp = function(){
    return axios
    .get(routepp+"/getAllAppli", {
      headers: {
        authorization: localStorage.token,
        "content-type" : "application/json",
      },
    })
  }

const Applis = ['Avi', 'Calcul Mental', 'Touche Colle', '4 à la suite', 'Code secret', 'Mot secret', 'Anion', 'Taquin', 'Livre vocabulaire', 'Laboratoire 1', 'Laboratoire 2', ]

const exports = { getAllApp, Applis }

export default exports