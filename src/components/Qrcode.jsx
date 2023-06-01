import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import QrScanner from 'react-qr-scanner';
import axios from 'axios';



function isBackCameraAvailable() {
    if ('mediaDevices' in navigator && 'enumerateDevices' in navigator.mediaDevices) {
      return navigator.mediaDevices.enumerateDevices()
        .then(devices => devices.some(device => device.kind === 'videoinput' && device.label.toLowerCase().includes('back')));
    }
    return Promise.resolve(false);
  }
  
  isBackCameraAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        // L'appareil photo arrière est disponible
      } else {
        // L'appareil photo arrière n'est pas disponible
      }
    })
    .catch(error => {
      console.error('Erreur lors de la vérification de l\'appareil photo :', error);
    });
  

function handleScan(result) {
    if (result) {
      console.log(result.text);
      const getCategoriesbillet = async () => {

      var billet = await axios.get(`${URL}/billetvendu/${result.text}`);
      console.log(billet);
      }
    
  }
  }
  
  function handleError(error) {
    console.error(error);
  }
  
  function Qrcode({URL, events}) {


    
    function handleScan(result) {
      if (result) {
        console.log(result.text);

        const getCategoriesbillet = async () => {
          var response = await axios.get(`${URL}/billetvendu/${result.text}`);
          console.log(response.data);
          console.log(events);


          for (let index = 0; index < events.length+1; index++) {
            if (index < events.length+1 && response.data[0].id_evenement === events[index].id_evenement) {
              if (response.data[0].validity === 0){
                axios.put(`${URL}/update/billetvendu/${result.text}`).then(res => {
                alert(`Billet B${response.data[0].id_evenement}-${response.data[0].id_categoriebillet}-${result.text} valide`)

                              })
              this.setState({scanning: false})

              break;
              }
              else{
                alert('Billet deja utilisé ')
              }
              this.setState({scanning: false})

              break;            }
            else{
              alert("this is not your event");
              break;
              this.setState({scanning: false})
            }
          }
          
        };
        getCategoriesbillet();
           }
    }
    const constraints = {
        video: { facingMode: 'environment' }
      };
    
    return (
      <QrScanner
        constraints={constraints}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    );
  }
export default Qrcode;