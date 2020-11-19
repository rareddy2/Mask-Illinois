import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// Recipient name
// Recipient email (illinois email) required
// Number of masks required
// Recipient phone number (optional)
// Recipient location required
// Additional information
// Time period (tomorrow, 1 week, 1 month)

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Submit information to seller</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Name <b className = 'red'> * </b>
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" required/>

        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Number of masks required <b className = 'red'> * </b>
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" required/>

        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Email address (Illinois email) <b className = 'red'> * </b>
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" required/>

        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Phone number
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />

        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Recipient location <b className = 'red'> * </b>
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" required/>

        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Time period (tomorrow, 1 week, 1 month) <b className = 'red'> * </b>
        </label>
        <select name='type_masks' onChange={this.handleChange} noValidate>
            <option> Cotton </option>
            <option> N-95 </option>
            <option> Surgical </option>
            <option> PolyProp </option>
            <option> Face Shield </option>
            <option> Other </option>
        </select>
        {/* <input type="email" id="defaultFormLoginEmailEx" className="form-control" required/> */}

        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Additional information  
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />

        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;