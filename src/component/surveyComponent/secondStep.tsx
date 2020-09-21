import React, { useState } from 'react';
import { Field } from 'formik';

export default function SecondStep(props: any) {
  console.log('SecondStep ==>',props)
  const [other, setOther] = useState(false);
  const [software, setSoftware] = useState('');
  const [solution, setSolution] = useState(false);
  const [solutionValue, setSolutionValue] = useState('');

  function changeEvent(e: any) {
    if (e.target.value === 'other') {
      setOther(true);
    }
    if (e.target.value !== 'other') {
      setOther(false);
    }
    setSoftware(e.target.value);
  }
  const chnageSolution = (e:any) =>{
    if (e.target.value === 'yes') {
        setSolution(true);
      }
      setSolutionValue(e.target.value);
  }
  return (
    <>
      <div className="form-group">
        <label htmlFor="position">
        Which software or computer based systems does your company use?
        </label>
        <Field
          isMulti={true}
          onChange={changeEvent}
          value={software}
          className="form-control"
          id="pwd"
          as="select"
        >
          <option value="marketing"> Marketing </option>
          <option value="socialMedia"> Social Media Management</option>
          <option value="revenueManagement"> Revenue Management</option>
          <option value="salesAndSpaceManagement">
            {' '}
            sales/event space Management
          </option>
          <option value="other"> other</option>
        </Field>
        {other ? (
          <div className="form-group" style={{ marginTop: '5px' }}>
            <Field
              type="text"
              className="form-control"
              id="position"
              name="other"
              placeholder="Please specify"
            />
          </div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="needs">
          In your opinion are there any software solution that your company
          needs that are not available?
        </label>
        <Field
          as="select"
          onChange={chnageSolution}
          className="form-control"
          id="needs"
          name="softwareNeeds"
          value={solutionValue}
        >
          <option value="no"> No </option>
          <option value="yes"> Yes</option>
        </Field>
        {solution ? (
          <div className="form-group" style={{ marginTop: '5px' }}>
            <Field
              type="text"
              className="form-control"
              id="position"
              name="softwareData"
              placeholder={`Please list ${solutionValue === "yes"?'according to importance':'why'} `}
            />
          </div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="position">What is your position?</label>
        <Field
          type="text"
          className="form-control"
          id="position"
          name="position"
        />
      </div>
      <div className="step footer">
        <button className="btn btn-sm" type="button" style={{backgroundColor:'#DB7938',color:'white'}} onClick={props.previousStep}>
          Previous Step
        </button>
        <button  className="btn btn-md pull-right"  type="submit" disabled ={props.isSubmitting} style={{backgroundColor:'#07346A',color:'white'}}>
         Submit
        </button>
      </div>
    </>
  );
}
