import React from 'react';
import { Field } from 'formik';

export default function ThirdStep(props: any) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="">Rank the following features in order of importance in your opinion:</label>
      <div className="form-check">
        <label className="form-check-label">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Live Display of all data and information in one place
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Summary of Data and Information across sources
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Analyzation of Data and information across sources
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <Field type="radio" className="form-check-input" name="softwareDataRate" />
          Automation of tasks based on parameters
        </label>
      </div>
      </div>
      <div className="form-group">
  <label htmlFor="position">Do you have any suggestions or comments?</label>
  <Field type="textarea" required className="form-control" id="position"  name="position"/>
</div>
<div className="form-group">
  <label htmlFor="position">Would you open to taking future surveys regarding future software solutions?</label>
  <Field  className="form-control" id="pwd" required name="futureSurvey" as="select" >
      <option value="yes"> yes </option>
      <option value="no"> no </option>
  </Field>
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
          className="btn btn-md pull-right"
          type="submit"
          disabled={props.isSubmitting}
          style={{ backgroundColor: '#07346A', color: 'white' }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
