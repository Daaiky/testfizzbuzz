'use strict';

document.getElementById('btn').addEventListener('click',()=>{

    const li = document.createElement('li');
    const fizz = document.getElementById('Fizz');
    const buzz = document.getElementById('Buzz');

    for(let i = 1 ; i <= 100 ; i++){
        if(isNaN(fizz.value || buzz.value)){
            if(i % fizz.value === 0 && i % buzz.value === 0){
                li.textContent = `fizzbuzz${i}`;
            }else if(i % fizz.value === 0){
                li.textContent = `fizz${i}`;
            }else if(i % buzz.value === 0){
                li.textContent = `buzz${i}`;
            }
        }else{
            li.textContent = `整数値を入力してください`;
        }
        document.getElementById('lists').appendChild(li);
    }
});