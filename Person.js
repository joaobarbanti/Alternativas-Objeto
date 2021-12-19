class Person{
   

    constructor(name,age){
 
       this.name= name;
       this.age= age;
 
    }
 
 
    greetings(){
 
       console.log("ola amigos meu nome e", this.name);
    }
 }

 module.exports = Person;