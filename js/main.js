'use strict';

const btn = document.getElementById('btn');
btn.addEventListener('click' , () => {

    const lists = document.getElementById('lists');

    if(!(lists === '')) {
        lists.innerHTML = '';
    }

    const fizz = document.getElementById('Fizz').value;
    const buzz = document.getElementById('Buzz').value;
    
    const fizzNumber = Number.parseInt(fizz);
    const buzzNumber = Number.parseInt(buzz);

    const li = document.createElement('li');
    if(isNaN(fizzNumber && buzzNumber)){
        li.textContent = `整数値を入力してください`;
        lists.appendChild(li);
    }else{
        for(let i = 1; i <= 100; i++){
            const li = document.createElement('li');  
            if(i % fizzNumber === 0 && i % buzzNumber === 0){
                    li.textContent = `fizzbuzz${i}`;
                }else if(i % fizzNumber === 0){
                    li.textContent = `fizz${i}`;
                }else if(i % buzzNumber === 0){
                    li.textContent = `buzz${i}`;
                }
        lists.appendChild(li);
        }
    }
});