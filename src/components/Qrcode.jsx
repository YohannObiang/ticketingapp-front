import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import QrScanner from 'react-qr-scanner';


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
    }
  }
  
  function handleError(error) {
    console.error(error);
  }
  
  function Qrcode() {

    
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