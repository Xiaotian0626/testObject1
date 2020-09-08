const submit=document.querySelector('.submit');
const input=document.querySelector('input');

function Person(name){
    this.name=name;
    this.greeting=function(){
        alert(`Hi, my name is ${this.name}.`);
    }
}

let person1=new Person(input.value);

submit.addEventListener('click',person1.greeting);