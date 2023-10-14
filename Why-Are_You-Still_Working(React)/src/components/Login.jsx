import React from "react";
import getInput from "./Input";

function girisKontrol() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default girisKontrol;
