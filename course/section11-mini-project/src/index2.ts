(function(){


  'use strict';

  // types
  interface FormDataType{
    inputValue: string;
    isChecked: boolean;
  }

  // vars
  const form = document.querySelector('#todoform') as HTMLFormElement;
  const input = document.querySelector('#todoinput') as HTMLInputElement;
  const checkbox = document.querySelector('#checkbox') as HTMLInputElement;
  let isChecked: boolean = false;

  let formData: FormDataType = {
    inputValue: '',
    isChecked: false
  };


  let data: FormDataType[] = [];

  function checkboxChecked(): boolean{
    return checkbox.checked;
  }
  
  function formSubmission(e: Event){
    e.preventDefault();
    let inputValue = input.value;
    // console.log(inputValue);

    // check if the checkbox is checked
    isChecked = checkboxChecked();
    
    // if it is then submit the form
    if(isChecked){
      formData.inputValue = inputValue;
      formData.isChecked = isChecked;
      data.push({inputValue, isChecked});
      form.reset();
    }else{
      console.log('checkbox not checked');
    }

    console.log(data);
  } 
  
  
  
  function listeners(): void{
    // listeners
    if(form){
      form.addEventListener('submit', formSubmission);
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    listeners();
  });

})();