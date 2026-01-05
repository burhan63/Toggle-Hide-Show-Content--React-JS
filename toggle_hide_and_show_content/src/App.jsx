import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setdisplay] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const togglehideandshow = () => {
    setdisplay(!display);
  }

  return (
    <>
      {
        display && (
          <div>
            <h1>My Clock</h1>
            <h2
              style={{
                border: "1px solid Black",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
                padding: "5px",
                width: "200px"
              }}
            >{time}</h2>
            <h5>Hello! what time is It?</h5>
          </div>
        )
      }
      {
        !display&&(
          <div>
            <h1>
              Hide All Data
            </h1>
          </div>
        )
      }

      <button onClick={togglehideandshow}>{display?"Hide data":"Show Data"}</button>
    </>
  )
}

export default App
