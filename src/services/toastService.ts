import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ToastService {


static requestMessage(response:any){
    switch(response.code){
      case 200:
      case 201:
      case 203:
      case 204:
      return toast(response.message);
     case 400:
     case 401:
     case 404:
     case 405:
         return 'error occur'
    default:
        return ''
    }
}
}