const numbers = [10,20,30,40,50];

const months = new Array('Jan', 'Feb', 'March', 'April');
console.log(months);
months.push('May');
console.log(months);
months.unshift('Month 0');
console.log(months);

const person={
    name:'Charles',
    age:32,
    birthYear:function(){
        return new Date().getFullYear()-this.age;
    },
    homework:[]

}

console.log(person);

//object constructor

class Assignments {
    constructor(name, description, date, grade) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.grade = grade;
    }
}

var assignment1 = new Assignments('Class 1','Team Tree House Practice','Nov 25th 2020','A');
var assignment2 = new Assignments('Class 2','JS Calculator','Nov 25th 2020','B');
console.log(assignment1);
person.homework.push(assignment1);
person.homework.push(assignment2);

var monkey ={
    name:'Rafiki',
    kingOfTheJungle:false,
    foodType:'Carnivore'
}

var lion = {
    name:'Simba',
    kingOfTheJungle:true,
    foodType:'Carnivore'
}

console.log(monkey);
console.log(lion);

class Animal{
    constructor(name,kingOfTheJungle,foodType){
        this.name = name;
        this.kingOfTheJungle=kingOfTheJungle;
        this.foodType=foodType;
    }
}

var monkeyC=new Animal('Rafiki',false,'Carnivore');
var lionC=new Animal('Simba',true,'Carnivore');