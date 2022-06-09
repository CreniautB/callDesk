import axios from 'axios';
const mainRoute = '/user'

const login = function(userJson){
    return axios
    .post(mainRoute+'/login', userJson, {
      headers: {
        "content-type": "application/json",
      },
    })
}

const signup = function (userJson ){
    return axios
      .post(mainRoute+'/signup', userJson, {
        headers: {
          "content-type": "application/json",
        },
      })

}

const delAcc = function(){
  axios.delete(mainRoute+"/"+localStorage.userId, {
    headers: {
      authorization: localStorage.token,
      "content-type" : "application/json",
    },
  })
}

const name = function(){
  return axios
  .get(mainRoute+"/name", {
    headers: {
      authorization: localStorage.token,
      "content-type" : "application/json",
    },
  })
}



const exports = { login, signup, delAcc, name }

export default exports