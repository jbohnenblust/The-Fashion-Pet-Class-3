let salon={
    name:"The Fashion Pet",
    address:{
        city:"City",
        street:"Street St",
        number:"750"
    },
    phone:"123-456-7890",
    pets:[]
}

//attributes
//name,age,gender,breed,service,owner,contactPhone

let {name,address:{city,street,number},phone,pets}=salon;

let scooby={
    name:"Scooby",
    age:5,
    gender:"Male",
    breed:"Dane",
    service:"Full Service",
    owner:"Shaggy",
    contactPhone:"555-555-5555"
}
let scrapy={
    name:"Scrapy",
    age:4,
    gender:"Male",
    breed:"Dane",
    service:"Nails cut",
    owner:"Shaggy",
    contactPhone:"555-555-5555"
}
let snoopy={
    name:"Snoopy",
    age:5,
    gender:"Male",
    breed:"Beagle",
    service:"Full Service",
    owner:"Shaggy",
    contactPhone:"555-555-5555"
}

pets.push(scooby);
pets.push(scrapy);
pets.push(snoopy);

let petNames = [];
for(let i=0;i<pets.length;i++){ //var changed to let
    petNames.push(pets[i].name);
}


// document.getElementById("pets").innerHTML = `There are ${pets.length} pets currently registered at The Fashion Pet: ${petNames.join(", ")}`;

// document.getElementById("pets").innerHTML=`There are ${pets.length} pets currently registered at The Fashion Pet: `;





// function newFunction() {
//     for (let i = 0; i < pets.length;i++) { //var changed to let
//         document.getElementById("pets").innerHTML += `${pets[i].join}`;
//     }
// }

// newFunction();
// for(let i=0;i<pets.length;i++){
//     document.getElementById("pets").innerHTML=`The current pets names are ${pets[0].name}, ${pets[1].name}, and ${pets[2].name}.`
// }