import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Restaurant = (props) => {

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol size="4">.col-4</MDBCol>
                <MDBCol size="8">.col-8</MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Restaurant;
