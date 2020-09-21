import React, { useState } from 'react';
import { Field } from 'formik';

export default function SecondStep(props: any) {
  console.log('SecondStep ==>', props);
  const [other, setOther] = useState(false);
  const [software, setSoftware] = useState('');
  const [solution, setSolution] = useState(false);
  const [solutionValue, setSolutionValue] = useState('');

  function changeEvent(e: any) {
    if (e.target.value !== '') {
      setOther(true);
    }
    if (e.target.value === '') {
      setOther(false);
    }
    setSoftware(e.target.value);
  }
  const chnageSolution = (e: any) => {
    if (e.target.value === 'yes') {
      setSolution(true);
    }
    setSolutionValue(e.target.value);
  };
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
          {' '}
          <option value="">Please Select</option>
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
        <label htmlFor="softwareComputer">
          Please list the names of the software or computer based systems your
          company uses if you know them off hand?
        </label>
        <Field
          type="text"
          className="form-control"
          id="softwareComputerId"
          name="softwareComputer"
        />
      </div>
      <div className="form-group">
        <label htmlFor="needs">
          In your opinion, are there any software solutions that your company
          needs that are not available?
        </label>
        <Field
          as="select"
          onChange={chnageSolution}
          className="form-control"
          id="needs"
          name="softwareData"
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
              name="softwareNeeds"
              placeholder={`Please list ${
                solutionValue === 'yes' ? 'according to importance' : 'why'
              } `}
            />
          </div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="software">
          Would your company be interested in a software that would display,
          summarize and analyze data from all of the different software programs
          your company uses into one platform that is easily accessible, live,
          and can learn and automate tasks? ?
        </label>
        <Field
          as="select"
          className="form-control"
          id="softwareData"
          name="softwareData"
        >
          <option value="no"> No </option>
          <option value="yes"> Yes</option>
        </Field>
      </div>
      <div className="form-group">
        <label htmlFor="needs">
          In your opinion, are there any software solutions that your company
          needs that are not available?
        </label>
      </div>
      <div className="radio-inline">
        <label className="radio-inline">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Not Useful
        </label>
      </div>
      <div className="radio-inline">
        <label className="radio-inline">
          <Field
            type="radio"
            className="form-check-input"
            name="softwareDataRate"
          />
          Somewhat Useful
        </label>
      </div>
      <div className="radio-inline">
        <label className="radio-inline">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Not sure
        </label>
      </div>
      <div className="radio-inline">
        <label className="radio-inline">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Quite Useful
        </label>
      </div>
      <div className="radio-inline" style={{paddingLeft: '10px'}}>
        <label className="radio-inline">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Very Useful
        </label>
      </div>
      <div className="step footer">
        <button
          className="btn btn-sm"
          type="button"
          style={{ backgroundColor: '#DB7938', color: 'white' }}
          onClick={props.previousStep}
        >
          Previous Step
        </button>
        <button
          className="btn btn-sm pull-right"
          type="button"
          onClick={props.nextStep}
          disabled={props.isSubmitting}
          style={{ backgroundColor: '#07346A', color: 'white' }}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
