import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const LnkButton = props => {
  return (
    <Fragment>
      <MDBBtn
        href="#"
      >
        {props.name}
      </MDBBtn>
    </Fragment>
  );
}

export default LnkButton;