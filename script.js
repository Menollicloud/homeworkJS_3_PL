a = +prompt("Введите число a");
b = +prompt("Введите число b");

while(a > b || a === b || isNaN(a) || isNaN(b)) {
    if(isNaN(a)) {
        alert("Введите число для a");
        a = +prompt("Введите число a");        
    } else if(isNaN(b)) {
        alert("Введите число для b");        
        b = +prompt("Введите число b");
    } else if(a > b || a === b) {
        alert("Число a должно быть меньше b");
        a = +prompt("Введите число a");
        b = +prompt("Введите число b");
    }
}

h = +prompt("Введите шаг перебора")

while(isNaN(h)) {
    if(isNaN(h)) {
        alert("Введите число для шага");
        h = +prompt("Введите шаг перебора");
    }
}

for(sumFact = 0; a <= b; h) {
    fact = 1;
    for(i = 0; i < a; i++) {
        fact =  fact * (a - i); 
    }
    sumFact = sumFact + fact;
    a = a + h;
}

console.log(sumFact);