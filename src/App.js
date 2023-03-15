import { useState, useRef, createRef, useEffect } from 'react';
import './App.css';

const style ={
  s : {
    backgroundColor: "#292929",
    boxShadow: "5px 5px 8px 1px black"
  },

  p : {
    backgroundColor: "green",
    boxShadow: "1px 1px 1px green"
  },

  u : {
    backgroundColor: "#292929",
    boxShadow: "none"
  }
}
  

const DrumMachine = function() {

  const [displayStr, setStr] = useState('');
  const [color, setColor] = useState({backgroundColor: 'red'});
  const [displayColor, setDispColor] = useState({backgroundColor: 'black'});
  const [status, setStatus] = useState('Off');
  const [padDisplay, setPadDisplay] = useState({backgroundColor: "#292929", boxShadow: "5px 5px 8px 1px black"})

  //creating refs
  const qRef = useRef();
  const wRef = useRef();
  const eRef = useRef();
  const aRef = useRef();
  const sRef = useRef();
  const dRef = useRef();
  const zRef = useRef();
  const xRef = useRef();
  const cRef = useRef();
  const qAudioRef = createRef();
  const wAudioRef = createRef();
  const eAudioRef = createRef();
  const aAudioRef = createRef();
  const sAudioRef = createRef();
  const dAudioRef = createRef();
  const zAudioRef = createRef();
  const xAudioRef = createRef();
  const cAudioRef = createRef();


  function handleClick(event) {

    if (status === "On") {
      setStr(event.target.value);
    }

    switch(event.target.value) {
      case "Heater-1":
        if (status === "On") {
          qRef.current.style.backgroundColor = style.p.backgroundColor;
          qRef.current.style.boxShadow = style.p.boxShadow;
          qAudioRef.current.play();
        }
        else {
          qRef.current.style.backgroundColor = style.u.backgroundColor;
          qRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            qRef.current.style.backgroundColor = style.s.backgroundColor;
            qRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Heater-2":
        if (status === "On") {
          wRef.current.style.backgroundColor = style.p.backgroundColor;
          wRef.current.style.boxShadow = style.p.boxShadow;
          wAudioRef.current.play();
        }
        else {
          wRef.current.style.backgroundColor = style.u.backgroundColor;
          wRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            wRef.current.style.backgroundColor = style.s.backgroundColor;
            wRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Heater-3":
        if (status === "On") {
          eRef.current.style.backgroundColor = style.p.backgroundColor;
          eRef.current.style.boxShadow = style.p.boxShadow;
          eAudioRef.current.play();
        }
        else {
          eRef.current.style.backgroundColor = style.u.backgroundColor;
          eRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            eRef.current.style.backgroundColor = style.s.backgroundColor;
            eRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Heater-4":
        if (status === "On") {
          aRef.current.style.backgroundColor = style.p.backgroundColor;
          aRef.current.style.boxShadow = style.p.boxShadow;
          aAudioRef.current.play();
        }
        else {
          aRef.current.style.backgroundColor = style.u.backgroundColor;
          aRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            aRef.current.style.backgroundColor = style.s.backgroundColor;
            aRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Clap":
        if (status === "On") {
          sRef.current.style.backgroundColor = style.p.backgroundColor;
          sRef.current.style.boxShadow = style.p.boxShadow;
          sAudioRef.current.play();
        }
        else {
          sRef.current.style.backgroundColor = style.u.backgroundColor;
          sRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            sRef.current.style.backgroundColor = style.s.backgroundColor;
            sRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Open-HH":
        if (status === "On") {
          dRef.current.style.backgroundColor = style.p.backgroundColor;
          dRef.current.style.boxShadow = style.p.boxShadow;
          dAudioRef.current.play();
        }
        else {
          dRef.current.style.backgroundColor = style.u.backgroundColor;
          dRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            dRef.current.style.backgroundColor = style.s.backgroundColor;
            dRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Kick N' Hat":
        if (status === "On") {
          zRef.current.style.backgroundColor = style.p.backgroundColor;
          zRef.current.style.boxShadow = style.p.boxShadow;
          zAudioRef.current.play();
        }
        else {
          zRef.current.style.backgroundColor = style.u.backgroundColor;
          zRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            zRef.current.style.backgroundColor = style.s.backgroundColor;
            zRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Kick":
        if (status === "On") {
          xRef.current.style.backgroundColor = style.p.backgroundColor;
          xRef.current.style.boxShadow = style.p.boxShadow;
          xAudioRef.current.play();
        }
        else {
          xRef.current.style.backgroundColor = style.u.backgroundColor;
          xRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            xRef.current.style.backgroundColor = style.s.backgroundColor;
            xRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;

      case "Closed-HH":
        if (status === "On") {
          cRef.current.style.backgroundColor = style.p.backgroundColor;
          cRef.current.style.boxShadow = style.p.boxShadow;
          cAudioRef.current.play();
        }
        else {
          cRef.current.style.backgroundColor = style.u.backgroundColor;
          cRef.current.style.boxShadow = style.u.boxShadow;
        }
        setTimeout(() => {
            cRef.current.style.backgroundColor = style.s.backgroundColor;
            cRef.current.style.boxShadow = style.s.boxShadow
        }, 100);
        return;
    }
  }

  function switchOnOff() {
    if (status === "Off") {
      setStatus('On');
      setColor({backgroundColor: 'green'});
      setDispColor({backgroundColor: "#4287f5"})
    } else {
      setStatus('Off');
      setColor({backgroundColor: 'red'});
      setStr('');
      setDispColor({backgroundColor: "black"})
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {

      const key = event.key.toLowerCase();
      
    switch(key) {
      case 'q':
        qRef.current.click();
        break;

      case 'w':
        wRef.current.click();
        break;

      case 'e':
        eRef.current.click();
        break;

      case 'a':            
        aRef.current.click();
        break;

      case 's':            
        sRef.current.click();
        break;

      case 'd':            
        dRef.current.click();
        break;

      case 'z':            
        zRef.current.click();
        break;

      case 'x':            
        xRef.current.click();
        break;

      case 'c':            
        cRef.current.click();
        break;
      }
    }) 
  })

  return (
    <div id="drum-machine">
      <button className="drum-pad" style={padDisplay} id="q" ref={qRef} value="Heater-1" onClick={handleClick}><audio className="clip" id="Q" ref={qAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
      <button className="drum-pad" style={padDisplay} id="w" ref={wRef} value="Heater-2" onClick={handleClick}><audio className="clip" id="W" ref={wAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
      <button className="drum-pad" style={padDisplay} id="e" ref={eRef} value="Heater-3" onClick={handleClick}><audio className="clip" id="E" ref={eAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
      <button className="drum-pad" style={padDisplay} id="a" ref={aRef} value="Heater-4" onClick={handleClick}><audio className="clip" id="A" ref={aAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
      <button className="drum-pad" style={padDisplay} id="s" ref={sRef} value="Clap" onClick={handleClick}><audio className="clip" id="S" ref={sAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
      <button className="drum-pad" style={padDisplay} id="d" ref={dRef} value="Open-HH" onClick={handleClick}><audio className="clip" id="D" ref={dAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
      <button className="drum-pad" style={padDisplay} id="z" ref={zRef} value="Kick N' Hat" onClick={handleClick}><audio className="clip" id="Z" ref={zAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
      <button className="drum-pad" style={padDisplay} id="x" ref={xRef} value="Kick" onClick={handleClick}><audio className="clip" id="X" ref={xAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
      <button className="drum-pad" style={padDisplay} id="c" ref={cRef} value="Closed-HH" onClick={handleClick}><audio className="clip" id="C" ref={cAudioRef} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
      <div id="display" style={displayColor}>{displayStr}</div>
      <div id="switch">
        <button id="button-switch" onClick={switchOnOff} style={color}>{status}</button>
      </div>
    </div>
  );
}

export default DrumMachine;
