import React from 'react'


const rulelist = (props) => {
  

    return (
        <a
          href={`#${props.name}`}
          style={{ textDecoration: "none", color: "#599de1" , fontWeight : "bold" ,  display : "block" }}
        >
          <i>{props.name}</i>
        </a>
    );

}


export default rulelist;
