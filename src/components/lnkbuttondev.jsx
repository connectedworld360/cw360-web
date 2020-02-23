import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const LnkButtonDev = props => {
  return (
    <Fragment>
      <MDBBtn outline
        href="#"
      >
        {props.name}
      </MDBBtn>
    </Fragment>
  );
}

export default LnkButtonDev;