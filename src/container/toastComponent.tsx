import React from 'react';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastMessage =(props:toastMessageProps) =>{
    const {message, isError, iswarning, isSuccess} = props;
    let notify = () => toast(message);
  if(isError){
    notify = () => toast.error(message);
  }
  if(iswarning){
    notify = () => toast.warning(message);
  }
  if(isSuccess){
     toast.success(message);
  }
 

  return (
    <div >
     
      <ToastContainer />
    </div>
  );
}
export interface toastMessageProps{
 isError?:boolean,
 message:string,
 direction:Direction,
 isSuccess?:string,
 iswarning:boolean,
 showToast():any,
}

enum Direction {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
  }