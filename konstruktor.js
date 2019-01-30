// 1. Создать конструктор для производства автомобилей.

function Cars(name, age) {
    this.name = name;
    this.age = age;
    this.displayAge = function() {
        let today = new Date();
        return (today.getFullYear() - this.age);
    };
    this.displayName = function() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    };
}
let renault = new Cars('renault', 10);
console.log(renault.displayAge());
console.log(renault.displayName());


// 2. Написать конструктор, который умеет элементарно шифровать строки 
// 
function Script(string) {
    this.displayString = function() {
        return (this.string = string);
    };
    this.displayCode = function() {
        return (this.string.split('').reverse().join(''));
    };
}

let abs = new Script('Qwerty');
console.log(abs.displayString());
console.log(abs.displayCode());