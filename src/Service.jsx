import React from "react";
import { useHistory } from "react-router-dom";

const Service = (props) => {
  const history = useHistory();

  return (
    <>
      <h1>Hi, i am {props.name} Page</h1>
      <button onClick={history.goBack}>Back</button>
    </>
  );
};

export default Service;
