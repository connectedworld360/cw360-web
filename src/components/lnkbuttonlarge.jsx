import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const LnkButtonLarge = props => {
  return (
    <Fragment>
      <MDBBtn
        href={props.link}
        style={{width:'100%'}}
      >
        {props.name}
      </MDBBtn>
    </Fragment>
  );
}

export default LnkButtonLarge;