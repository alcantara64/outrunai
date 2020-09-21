import React from "react";
import StepWizard from 'react-step-wizard';
import { Formik, Form } from 'formik';
import FirstStep from "./firstStep";
import { FooterComponent } from "../../container/footerComponent";
import { HeaderComponent } from "../../container/headerComponent";
import SecondStep from "./secondStep";
import { SurveyService } from "../../services/surveyService";
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThirdStep from "./thirdStep";
export interface Props {
   history:any,
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
      console.log('props ==>', this.props)
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
       toast.success('Thank You - Your response is most appreciated as it will help us design software solutions for your benefit.');
       this.submitted();
       setTimeout(()=>{
        this.props.history.push('/')
       },5000)
       })
       .catch(error =>{
         toast.error(error.message)
       })
       }}
     >
                 {({ isSubmitting,
                handleSubmit,
                }) => (
                      
         <Form onSubmit={handleSubmit}>
             <StepWizard >
             <FirstStep/>
             <SecondStep />
             <ThirdStep isSubmitting={this.state.submitted}></ThirdStep>
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