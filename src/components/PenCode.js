import React, { Component } from 'react'




class PenCode extends Component {

  componentDidMount() {
    console.log("Pencode mounted!");
    try {
          // this function is injected by codepen js codes: https://static.codepen.io/assets/embed/ei.js
          // need to rerun every component mounted
          window.__CPEmbed();
    } catch (error) {
  
    }
  }

  render() {
    return (
      <p
        className="codepen"
        data-height={this.props.height || 500}
        data-theme-id="dark"
        data-default-tab="js,result"
        data-user="cleverform"
        data-slug-hash={this.props.penID}
        // data-preview="true"
        style={{
          height: this.props.height ? this.props.height + "px" : "500px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid",
          margin: "1em 0",
          padding: "1em",
        }}
        data-pen-title="CleverForm in Bootstrap"
      >
        <span>
          See the Pen{" "}
          <a href={`https://codepen.io/cleverform/pen/${this.props.penID}`}>
            CleverForm in Bootstrap
          </a>{" "}
          by CleverForm (<a href="https://codepen.io/cleverform">@cleverform</a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
    );
  }
}


export default PenCode;