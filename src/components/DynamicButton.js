import React, { Component } from "react";
import axios from "axios";
import "./../style/app.css"; 

/**
 * Get the latest cdn.jsdelivr package version and dynamically display button in the documentation.
 *
 * - this will automatically change the documentation download button once the NPM package is updated.
 */
class DynamicButton extends Component {

  state = {
    version: "latest",
  };

  //Making the API call and once resolved updating the state
  componentDidMount() {
    //latest package json details
    const packageJsonUrl =
      "https://cdn.jsdelivr.net/npm/cleverform@latest/package.json";

    // Make a request for a user with a given ID
    axios.get(packageJsonUrl).then((res) => {
    //   console.log(res.body);
      const latestVersion = res.data.version;
      this.setState({ version: latestVersion });
    });
  }

  downloadHandler = () => {

    axios
    .get(`https://cdn.jsdelivr.net/npm/cleverform@${this.state.version}/dist/${this.props.file}`)
    .then((res) => {
        // console.log(typeof res.data);

        //actual code in string
        let content = res.data;


        //creating an invisible element
        var element = document.createElement("a");
        element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8, " + encodeURIComponent(content)
        );
        element.setAttribute("download", this.props.file);

        // Above code is equivalent to
        // <a href="path of file" download="file name">

        document.body.appendChild(element);

        //onClick property
        element.click();

        document.body.removeChild(element);
    });
}
  render() {
    // remove the `https` in the href to avoid opening in new tab instead of downloading
    return (
      <button
        className="btn btn-js-download"
        onClick={ this.downloadHandler }
      >
        {this.props.name}
      </button>
    );
  }
}

export default DynamicButton;
