import React, { Component } from "react";
import RuleDescription from "./RuleDescription";
import rules from "../rules";

class RuleDescriptionLists extends Component {
  state = {};

  render() {
    return (
      <div>
        {rules.map((rule) => {
          return (
            <RuleDescription
              key={rule.name}
              name={rule.name}
              description={rule.description}
              parameters={rule.parameters}
              notes={rule.notes}
            />
          );
        })}
      </div>
    );
  }
}

export default RuleDescriptionLists;
