import React, { Component } from "react";
import "./AbilityScore.css";
//Ability Score containers (Strength, Dex, etc), will calculate the modifier
//needs a method on click to roll
//needs a method for on hover to show a little pencil icon that you can then use to edit the number

function AbilityScore() {
  const [abilityScore, setAbilityScore] = useState(0);
  const [modifier, setModifier] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const result = randomNumber + calculateModifier(abilityScore);
    // You can do something with the 'result' here if needed.
  };

  const calculateModifier = (abilityScore) => {
    if (abilityScore < 1 || abilityScore > 30) {
      return "Error";
    }
    return Math.floor((abilityScore - 10) / 2);
  };

  return (
    <div className="box">
      <div className="circle"></div>
    </div>
  );
}

export default AbilityScore;
