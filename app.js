'use strict'

const switcher=document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    var className=document.body.className;
    if(className=="light-theme"){
        this.textContent="Dark";
    }
    else{
        this.textContent="Light";
    }

    console.log('current class name: ' + className);
});

const btn = document.getElementById('toggleTheme');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    btn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
