import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [qCode, setQCode] = useState('')
  useEffect(()=>{
    const getQRCode = async()=>{
      try {
        const res = await axios.get("http://localhost:3000/qr-code?text=promise")
        setQCode(res.data)
        console.log(res.data)
        return res
      } catch (error) {
        console.log(error, 'the error')
      }
    }
    getQRCode()
  },[])
  return (
    <div className="App">
      <h1>This is the QR Code Scanner</h1>
      <img src={qCode} alt='qrcode' />
    </div>
  );
}

export default App;
