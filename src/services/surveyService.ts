import axios from 'axios';
import { Survey } from '../models/Survey';


export class SurveyService{

static submit(data:Survey){
 return axios.post(`${process.env.REACT_APP_BASE_URL}survey`, data)
 }
}