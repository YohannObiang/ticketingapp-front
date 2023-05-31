import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import QrScanner from 'react-qr-scanner';


function handleScan(result) {
    if (result) {
      console.log(result.text);
    }
  }
  
  function handleError(error) {
    console.error(error);
  }
  
  function Qrcode() {
    return (
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    );
  }
export default Qrcode;