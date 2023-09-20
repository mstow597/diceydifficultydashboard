import React, { Component } from "react";

//Ability Score containers (Strength, Dex, etc), will calculate the modifier
//needs a method on click to roll
//needs a method for on hover to show a little pencil icon that you can then use to edit the number

class AbilityScore extends Component {
  constructor(props) {
    super(props);

    //instantiated state
    this.state = {
      abilityScore: 0,
      modifier: 0,
    };
  }
  //roll the dice
  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const result = randomNumber + this.modifier;
  };

  calculateModifier = (abilityScore) => {
    if (abilityScore < 1 || abilityScore > 30) {
      return "Error";
    }

    return Math.floor((abilityScore - 10) / 2);
  };
}
