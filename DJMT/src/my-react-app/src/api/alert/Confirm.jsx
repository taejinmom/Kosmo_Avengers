import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const Confirm = (title,onClickYes) =>{
    console.log('confirm function >> ',onClickYes)
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