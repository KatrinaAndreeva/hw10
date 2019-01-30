//1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(i1, i2) {
    i1 = i1 | 0;
    i2 = i2 | 0;
    return parseInt(i1 - i2);
}
console.log(minus(10, 6));
console.log(minus(5, 6));
console.log(minus(10));
console.log(minus('', 6));
console.log(minus('', ''));

//2.  Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

let int = 1;

function multiply(i) {
    if (int == 1) int = i;
    else return int = int * i;
}

multiply(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

let stringModule = (function() {
    let string = '';
    return {
        stringAdd: function(val) {
            string = val;
        },
        getStringCount: function() {
            return string.length;
        },
        stringreverse: function() {
            return string.split('').reverse().join('');
        }
    };
}());

stringModule.stringAdd('abcde');
console.log(stringModule.getStringCount());
console.log(stringModule.stringreverse());


//4. Создайте модуль “калькулятор”, который умеет складывать, умножать,
// вычитать, делить и возводить в степень. Конечное значение округлить 
// до двух знаков после точки (значение должно храниться в обычной переменной,
// не в this).
//модуль.установитьЗначение(10); // значение = 10
//модуль.прибавить(5); // значение += 5
//модуль.умножить(2); // значение *= 2
//модуль.узнатьЗначение();
// вывести в консоль 30 (здесь надо округлить)

//Также можно вызывать методы цепочкой:
//модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
var calcModule = (function() {
    var value = 0;
    return {
        setvalue: function(val) {
            value = val;
        },
        add: function(val) {
            value += val;
        },
        multiply: function(val) {
            value *= val;
        },
        learnvalue: function() {
            return value;
        }
    }
}());
calcModule.setvalue(10);
calcModule.add(5);
calcModule.multiply(2);
console.log(calcModule.learnvalue());
//console.log(calcModule.setvalue(10).learnvalue());
