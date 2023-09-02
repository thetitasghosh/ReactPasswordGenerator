import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  //USESTATE
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");


  //USERef
  const passwordRef = useRef(null);


  //  Password Generator Function
  const passGen = useCallback(() => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) char += "0123456789";
    if (charAllow) char += "!@#$%^&*(){}_+";

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * char.length + 1);
      pass += char.charAt(random);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  //Copy Password to clipboard function 
  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 99999);

    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [passwordRef]);


  //USEEFFECT
  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);

  return (
    <>
      <h1>Password Generetor</h1>
      <br />
      <div className="container">
        <div className="center">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="password"
          />
          <button onClick={CopyPassword}>copy</button>
        </div>
        <div className="inputs">
          <div className="length">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="Num">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="Char">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
