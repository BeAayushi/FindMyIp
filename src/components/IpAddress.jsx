import React from "react";

const IpAddress = (props) => {
  return (
    <div className="container">
      <div className="ip">
        <h4 className="text">Your Ip is...</h4>
        {props.ipAddreess}
      </div>
    </div>
  );
};

export default IpAddress;
