import React from 'react'


const rulelist = (props) => {
  

    return (
        <a
          href={`#${props.name}`}
          style={{ textDecoration: "none", color: "#b3cdf6" , fontWeight : "bold" ,  display : "block" }}
        >
          <i>{props.name}</i>
        </a>
    );

}


export default rulelist;
