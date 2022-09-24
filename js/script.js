const firstP = document.getElementById('demo1');

firstP.addEventListener('ondblclick' , function(){
    this.style.backgroundColor = 'lightgreen';
    this.style.fontSize = '30px';
    this.style.color = 'darkgray';
});

const secondP = document.getElementById('demo2');

secondP.addEventListener('onclick' , function(){
    this.style.backgroundColor = 'red';
    this.style.fontSize = '45px';
    this.style.color = 'cyan';
});

const thirdP = document.getElementById('demo3');

thirdP.addEventListener('onclick' , function(){
    this.style.backgroundColor = 'gray';
    this.style.fontSize = '10px';
    this.style.padding = '15px';
});