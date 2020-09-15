import axios from 'axios';


export class SurveyService{
 submit(data:any){
 return axios.post(`${process.env.REACT_APP_BASE_URL}/survey`, data)
 }
}