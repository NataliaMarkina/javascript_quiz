const readlineSync = require('readline-sync');
const path = require('path');
const fs = require('fs');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNameFile() {
    let arrNames = [];
    let number;
    
    for (let i = 0; i < 5; i++) {
        do {
            number = getRandom(1,15);
        } while (arrNames.indexOf('Question' + number + '.txt') >= 0);
        arrNames.push('Question' + number + '.txt');
    }
    return arrNames;
}

try {
    let arrNames = getNameFile();
    let count = 0;
    
    
    for (let i = 0; i < 5; i++) {        
        const data = fs.readFileSync(path.resolve(arrNames[i]));
        console.log(data.toString().split('\n')[0]);
        console.log(data.toString().split('\n')[2]);
        console.log(data.toString().split('\n')[3]);
        console.log(data.toString().split('\n')[4]);
        
        let answer = readlineSync.question('\n--> ');
        
        if (parseInt(answer) === parseInt(data.toString().split('\n')[1])) {
            count++;
        }

        console.log('\n');
    }

    console.log('Количество правильных ответов: ' + count);
} catch (err) {
    console.error(err);
}