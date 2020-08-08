import React, { Component } from 'react'
import axios from 'axios'


/**
 * Get the latest cdn.jsdelivr package version and dynamically display in the documentation.
 * 
 * - this will automatically change the documentation once the NPM package is updated. 
 */
class DynamicCDN extends Component {

  state = {
    version : 'latest',
  }


  //Making the API call and once resolved updating the state
  componentDidMount(){

  //latest package json details
  const packageJsonUrl = 'https://cdn.jsdelivr.net/npm/cleverform@latest/package.json';

  // Make a request for a user with a given ID
  axios.get(packageJsonUrl).then( res => {
    // console.log(res.data);
    const latestVersion = res.data.version;
    this.setState({ version: latestVersion });
  });
  }

  render(){
    return (
      <div
        style={{
          backgroundColor: "#f6f8fa",
        }}
      >
        <pre
          className="language-js prism-code language-js css-1h0sj8d"
          data-testid="code"
          style={{
            fontFamily: "Inconsolata",
            color: "rgb(57, 58, 52)",
            backgroundCcolor: "rgb(246, 248, 250)",
            overflowX: "auto",
          }}
        >
          <div
            className="token-line"
            style={{ fontFamily: "Inconsolata", color: "rgb(57, 58, 52)" }}
          >
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              &lt;
            </span>
            <span className="token plain css-1baulvz">script src</span>
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              =
            </span>
            <span
              className="token string css-1baulvz"
              style={{ color: "rgb(227, 17, 108)" }}
            >
              "https://cdn.jsdelivr.net/npm/cleverform@{this.state.version}/dist/{this.props.file}"
            </span>
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              &gt;
            </span>
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              &lt;
            </span>
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              /
            </span>
            <span className="token plain css-1baulvz">script</span>
            <span
              className="token operator css-1baulvz"
              style={{ color: "rgb(57, 58, 52)" }}
            >
              &gt;
            </span>
          </div>
        </pre>
      </div>
    );
  }

}

export default DynamicCDN