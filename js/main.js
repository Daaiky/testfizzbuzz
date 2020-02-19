'use strict';

const hoge = document.getElementById('btn');
hoge.addEventListener('click',()=>{

    const li = document.createElement('li');
    const fizz = document.getElementById('Fizz').value;
    const buzz = document.getElementById('Buzz').value;
    
    const fizznumber = Number.parseInt(fizz);
    const buzznumber = Number.parseInt(buzz);
    
    for(let i = 1 ; i <= 100 ; i++){
        if(isNaN(fizznumber && buzznumber)){
            li.textContent = `整数値を入力してください`;
        }else{
            if(i % fizznumber === 0 && i % buzznumber === 0){
                li.textContent = `fizzbuzz${i}`;
            }else if(i % fizznumber === 0){
                li.textContent = `fizz${i}`;
            }else if(i % buzznumber === 0){
                li.textContent = `buzz${i}`;
            }
        }
        document.getElementById('lists').appendChild(li);
    }
});