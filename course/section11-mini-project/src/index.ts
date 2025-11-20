//imports 
import checkboxChecked from './utils/helpers.js';


// IIFY WRAPPER
(function () {

  'use strict';


  /**
   * type declarations
   * */


  type IsChecked = boolean;
  interface FormSubmission {
    inputValue: string;
    isChecked: boolean;
  }


  /**
   * variables
   * */

  const form = document.querySelector('#todoform') as HTMLFormElement;
  const input = form?.querySelector('#todoinput') as HTMLInputElement;
  const checkbox = form?.querySelector('#checkbox') as HTMLInputElement;
  let isChecked: IsChecked = false;
  let formData: FormSubmission = { inputValue: '', isChecked: false };
  let data: FormSubmission[] = [];



  if (!form) {
    return;
  };



  /**
   * functions
   * */

  function formSubmission(e: Event): void {
    e.preventDefault();
    let inputValue = input.value;
    // console.log(inputValue);

    // check if the checkbox is checked
    isChecked = checkboxChecked(checkbox);

    // if it is then submit the form
    if (isChecked) {
      formData.inputValue = inputValue;
      formData.isChecked = isChecked;
      data.push({ inputValue: inputValue, isChecked: isChecked });
      form.reset();
    } else {
      console.log('checkbox not checked');
    }

    console.log(data);
  }








  /**
   * listeners
   * */

  function listeners(): void {

    // form submission
    if (form) {
      form.addEventListener('submit: SubmitEvent', formSubmission);
    }

  }




  /**
   * initialize app
  */
  window.addEventListener('DOMContentLoaded', function () {
    listeners();
  });

})();

