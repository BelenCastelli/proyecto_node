const fs=require('fs')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { constants } = require('node:fs/promises');
const rl = readline.createInterface( {input:process.stdin, output: process.stdout});


let person2 = {
    nombre:'',
    apellido: '',
    edad: 0
}

function readConsole(callback){
    let person2 = {
        nombre:'',
        apellido: '',
        edad: 0
    }

    
    rl.question('¿cuál es tu nombre? ', (name) => {
        person2.nombre = name
        callback(person2.nombre);

        rl.question('¿cuál es tu apellido? ', (surname) => {
            person2.apellido = surname
            callback(person2.apellido);

            rl.question('¿cuál es tu edad? ', (age) => {
                person2.edad = age
                callback(person2.edad);
                rl.close();


                callback(person2);
                fs.writeFile('person2.json', JSON.stringify(person2), error => {
                    if(error){
                        console.log('error' + error);
                    } else  {
                        console.log('archivo escrito correctamente'); }
                })
                });
            });
    
    });
}

module.exports = {readConsole}


