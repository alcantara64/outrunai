import React from "react";
import StepWizard from 'react-step-wizard';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FirstStep from "./firstStep";
import { FooterComponent } from "../../container/footerComponent";
import { HeaderComponent } from "../../container/headerComponent";
import SecondStep from "./secondStep";
import { SurveyService } from "../../services/surveyService";
 import {Redirect} from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export interface Props {
   
}
 
export interface State {
    stage: Number,
    submitted:boolean,
}
 
class surverComponent  extends React.Component<Props, State> {
  constructor(props:any){
    super(props)
    this.state = { 
      submitted: false,
      stage:0,

      }
  }
  submitted= () =>{
    this.setState({
      submitted:true
    })
  }
   
    render(): JSX.Element { 
        return(
            <div className="page-wrapper">
            <HeaderComponent />
           
        <div className="container contain-jumbotron">
        <div className="jumbotron">
        <Formik
       initialValues={{ name: '', managementCompany:'', position:'' }}
       onSubmit={(values, { setSubmitting }) => {
       setSubmitting(true)
       console.log(values)
       SurveyService.submit(values)
       .then(() =>{
       toast.success('Thanks for taking the survey');
       })
       }}
     >
                 {({ isSubmitting,
                handleSubmit,
                errors,
                }) => (
                      
         <Form onSubmit={handleSubmit}>
             <StepWizard >
             <FirstStep/>
             <SecondStep isSubmitting={isSubmitting}/>
            </StepWizard>
         </Form>   
                    
       )}
          

            </Formik>
            </div>
            </div>
             <FooterComponent />
             <ToastContainer/> 
             </div>

        )
    }
}
 
export default surverComponent;