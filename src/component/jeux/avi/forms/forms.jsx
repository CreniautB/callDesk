import React, {useState, useEffect} from "react";
import axios from 'axios';
import route from '../../../../service/userCall'

const Forms = ({ arrayBlob, idChap }) => {

  const [confirm , setConfirm] = useState(false)
  const [dataUser, setDataUser] = useState('')



  function setPublic(e) {
    const email = 'creniaut.benjamin@gmail.com'
    handleDownload(email)
    setConfirm(true)
  }

  function setPrive(e) {
    const email = 'creniaut.benjamin@gmail.com'
    handleDownload(email)
    setConfirm(true)
  }

  useEffect(() => {
    route.name()
    .then((reponse) => {
       setDataUser(reponse.data.id)
    })
}, [])

  // Envoie Des fichier et req serveur

  const handleDownload = (email) => {

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

      formData.append('emailCorrection', email)

      axios.post(`https://back.testbenjaminc.fr/api/avi/merge/${idChap}`, formData ,{
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
    }

    if (!confirm){
          return (
            <div className='center'>

              <h1>Bravo Vous avez terminé ce chapitre</h1>
              <h2>Téléchargez la vidéo pour nous l'envoyer pour correction</h2>

              <h2>Choix de corrections</h2>

              <button className='button' onClick={setPrive}>Privé</button>
              <button className='button' onClick={setPublic}>Publique</button>
                    
          </div>
          )
    }
    else{
      return (
          
        <div className="center">
            <h1>Merci de nous faire confiance</h1>
            <h2>Nous vons recontacterons dès que la correction sera effectuée</h2>
            <h3>Bonne continuation sur CallDesk ! </h3>
        </div>
        
        )
    }
};

export default Forms