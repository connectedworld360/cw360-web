import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom'

const LnkButtonLarge = props => {
  return (
      <Link to={props.link}>
        <MDBBtn
          //href={props.link}
          style={{width:'100%'}}
        >
          {props.name}
        </MDBBtn>
      </Link>
  );
}

export default LnkButtonLarge;