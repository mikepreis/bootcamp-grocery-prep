console.log("App.js loaded");

let btnAdd = document.querySelector('#inc');
let input = document.querySelector('servingCount');

btnAdd.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});