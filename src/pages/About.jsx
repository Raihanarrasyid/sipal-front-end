import HeroAbout from "@/components/about/HeroAbout";
import Todo from "@/components/about/Todo";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <HeroAbout />
        <Todo />
      </div>
    );
  }
}
