import React from 'react';
import { Field } from "formik";
import importedImage from '../../Images/survey-image.png'

export default function FirstStep(props:any) {

    return (
    

<>
<div className="row">
<img src={importedImage}  alt="Survey" width="161" style={{paddingLeft:"37%", marginBottom:"11px"}}/>
</div>

<div className="form-group">
  <label htmlFor="name" >What is your name?</label>
  <Field type="text" required className="form-control" id="name"  name="name"/>
</div>
<div className="form-group">
  <label htmlFor="management">What Management company do you represent?</label>
  <Field type="text" required className="form-control" id="management" name="managementCompany" />
</div>
<div className="form-group">
  <label htmlFor="position">What is your position?</label>
  <Field type="text" required className="form-control" id="position"  name="position"/>
</div>
<div className="form-group">
  <label htmlFor="position">How many hotels do you oversee?</label>
  <Field  className="form-control" id="pwd" required name="hotelsManaged" as="select" >
      <option value="1"> 1 </option>
      <option value="2"> 2</option>
      <option value="3"> 3</option>
      <option value="4"> 4</option>
      <option value="5"> 5</option>
      <option value="greater"> Greater than 5</option>
  </Field>
</div>
<div className="form-group">
  <label htmlFor="hotelBrand">Which hotel brands does your Management company work with?</label>
  <Field type="text" required className="form-control" id="hotelBrand"  name="hotelBrand"/>
</div>
<div className = "step footer">
<button className="btn btn-sm pull-right" type="button"  style={{backgroundColor:'#07346A',color:'white'}} onClick={props.nextStep}>Next Step</button>
</div>
</>
    )
}
