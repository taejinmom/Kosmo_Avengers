import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const Confirm = (title, onClickYes, status) =>{
    console.log('confirm function >> ',onClickYes)
    
    if(status==='warning') {
    return confirmAlert({
    //   title: 'Confirm to submit',
      message: title,
      buttons: [
        {
          label: 'Yes',
          onClick: () =>  onClickYes()
        }
      ]
    });
  }else if(status==='confirm') {
    return confirmAlert({
      //   title: 'Confirm to submit',
        message: title,
        buttons: [
          {
            label: 'Yes',
            onClick: () => onClickYes()
          },
          {
            label: 'No',
          }
        ]
      });
  }

}