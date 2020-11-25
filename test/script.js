//Array
var names=["Romeo", "Jeff", "Trey", "Charles"];
console.log(names);
console.log(names[2]);

let gpas=[2.5,3.6,2.4,4,3.9];
console.table(gpas);

var mixed=["Romeo",3.5,"Charles",4.67,true];
console.table(mixed);

//travel an array

for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

for(var j=0;j<gpas.length;j++){
    console.log(gpas[j]);
}

for(var k=0;k<mixed.length;k++){
    console.log(mixed[k]);
}

//objects literal

var student1={
    name:"Jeremy",
    lastName:"Gilbert",
    age:30,
    address:{
        country:"Mexico",
        city:"Tijuana"
    },
    music:["Coldplay", "Eminem", "REM", "Rolling Stones"]
}

// console.log(student1.age);
// console.log(student1.address.city);
// console.log(student1.music[2]);

student1City=student1.address.city; //old way

//object destructuring

var {name,lastName,age,address:{city}}=student1;
// console.log(age);

for(var i=0;i<student1.length;l++){
    console.log(student1[i])
}
