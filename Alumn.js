const Person = require('./Person')


class Alumn extends Person{

    constructor(name,age,turma){
     super(name,age)
     this.turma = turma;
    }
 
 
 
 greetings(){


    console.log("ola tudo bom meu nome e",this.name,"e estou na turma",this.turma)


 }
 }



 module.exports = Alumn;
 