import React , {Component } from 'react'
import Rulelist from "./Rulelist";
import rules from '../rules'

class Rulelists extends Component{

    state = {

    }

    render(){
        return (
          <div style={{ marginBottom: "4rem" }}>
            {rules.map((rule) => {
              return <Rulelist name={rule.name} key={rule.name} />;
            })}
          </div>
        );
    }


}


export default Rulelists;