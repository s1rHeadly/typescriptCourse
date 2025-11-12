


/**
 * Imports
 * */


import checkboxChecked from './utils/helpers.js';

(function(){

'use strict';


/** Type Assertions */

const myMysteryVariable: unknown = 'Hello World';
const lengthofString : number = (myMysteryVariable as string).length;
//console.log(lengthofString);





/***
 * 
 * Project code
 * 
 * /



/** Types */

type isCheckedType = boolean;

interface todoItemType{
  input: string;
  completed: boolean;
}




/** Variables */
const form = document.querySelector('#todoform') as HTMLFormElement;
const input = form.querySelector('#todoinput') as HTMLInputElement;
const list = document.querySelector('#todolist') as HTMLElement;
let isChecked: isCheckedType = false;

let todoList: todoItemType[] = [];



/** Functions */



function createDOMToDo(todo: todoItemType){
  // create elements and add to the dom list
  const li = document.createElement('li');
  li.textContent = todo.input;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);
  list.appendChild(li);
}




function readToDoList(): todoItemType[]{
  const todoes = localStorage.getItem('todos');
  if(todoes === null){
    return [];
  }
  const parsedTodos: todoItemType[] = JSON.parse(todoes);
  for(const todo of parsedTodos){
    createDOMToDo(todo);
  }
  return parsedTodos;
}


function submitForm(e: SubmitEvent) : void{
  e.preventDefault();

  // get the value from the input
  let inputValue = input.value;
  
    if(inputValue.length){
        // crate new object
        const newToDo: todoItemType = {
          input: inputValue,
          completed: false
        };

        //create new DOM Item and show it in the DOM
        createDOMToDo(newToDo);

        // push that item to the array to keep track of the items
        todoList.push(newToDo);

        // set local storage
        localStorage.setItem('todos', JSON.stringify(todoList));
      
        // reset the form
        form.reset();
    }

}











function listeners(): void{
  if(form){
    form.addEventListener('submit', submitForm);
  }

  


}

window.addEventListener('DOMContentLoaded', function(){
  // Load todos from localStorage on page load
  todoList = readToDoList();
  listeners();
});

})();