import React, { useState } from 'react';
import { Field } from 'formik';

export default function SecondStep(props: any) {
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
          What kind of software or computer based system does your company uses?
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
          name="companyNeed"
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
              name="softwareSolution"
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
        <button className="btn btn-sm" onClick={props.nextStep}>
          Next Step
        </button>
      </div>
    </>
  );
}
