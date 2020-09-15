import React from "react";
import StepWizard from 'react-step-wizard';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FirstStep from "./firstStep";
import { FooterComponent } from "../../container/footerComponent";
import { HeaderComponent } from "../../container/headerComponent";
import SecondStep from "./secondStep";

export interface Props {
   
}
 
export interface State {
    stage: Number
}
 
class surverComponent  extends React.Component<Props, State> {
    state = { stage: 9  }
    render(): JSX.Element { 
        return(
            <div className="page-wrapper">
            <HeaderComponent />
           
        <div className="container contain-jumbotron">
        <div className="jumbotron">
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {email:''};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
                 {({ isSubmitting }) => (
                      
         <Form>
             <StepWizard >
             <FirstStep/>
             <SecondStep/>
            </StepWizard>
         </Form>   
                    
       )}
          

            </Formik>
            </div>
            </div>
             <FooterComponent />
             </div>
        )
    }
}
 
export default surverComponent;