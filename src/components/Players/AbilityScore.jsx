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
    if (abilityScore === 1) {
      return -5;
    } else if (abilityScore >= 2 && abilityScore <= 3) {
      return -4;
    } else if (abilityScore >= 4 && abilityScore <= 5) {
      return -3;
    } else if (abilityScore >= 6 && abilityScore <= 7) {
      return -2;
    } else if (abilityScore >= 8 && abilityScore <= 9) {
      return -1;
    } else if (abilityScore >= 10 && abilityScore <= 11) {
      return 0;
    } else if (abilityScore >= 12 && abilityScore <= 13) {
      return 1;
    } else if (abilityScore >= 14 && abilityScore <= 15) {
      return 2;
    } else if (abilityScore >= 16 && abilityScore <= 17) {
      return 3;
    } else if (abilityScore >= 18 && abilityScore <= 19) {
      return 4;
    } else if (abilityScore >= 20 && abilityScore <= 21) {
      return 5;
    } else if (abilityScore >= 22 && abilityScore <= 23) {
      return 6;
    } else if (abilityScore >= 24 && abilityScore <= 25) {
      return 7;
    } else if (abilityScore >= 26 && abilityScore <= 27) {
      return 8;
    } else if (abilityScore >= 28 && abilityScore <= 29) {
      return 9;
    } else if (else {
      return "Error";
    }
  };
}
