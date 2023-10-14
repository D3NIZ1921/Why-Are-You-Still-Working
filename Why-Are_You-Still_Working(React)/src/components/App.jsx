import React from "react";
import girisKontrol from "./Login";

var girisYap = false;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {girisYap ? <h1>Hello</h1> : <girisKontrol />}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
