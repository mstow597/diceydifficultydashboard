import React, { useState } from "react";
import "./AbilityScore.css";
//Ability Score containers (Strength, Dex, etc), will calculate the modifier
//needs a method on click to roll
//needs a method for on hover to show a little pencil icon that you can then use to edit the number
// testing git config email
function AbilityScore(props) {
  const [abilityScore, setAbilityScore] = useState(props.abilityscore);
  const [modifier, setModifier] = useState(0);
  const [editable, setEditable] = useState(false);
  const abilityString = props.name;

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const result = randomNumber + calculateModifier(abilityScore);
    console.log(result);
    return result;
  };

  const calculateModifier = (abilityScore) => {
    if (abilityScore < 1 || abilityScore > 30) {
      return "Error";
    }
    return Math.floor((abilityScore - 10) / 2);
  };

  return (
    <div onClick={handleClick} className="box">
      <h2 contentEditable={editable}>{abilityScore}</h2>
      <div className="circle">
        <h3 className="modifier">{modifier}</h3>
      </div>
    </div>
  );
}

export default AbilityScore;
