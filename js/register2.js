//object literal

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

//object destructuring

let {name,address:{city,street,number},phone,pets}=salon;

//attributes
//name,age,gender,breed,service,owner,contactPhone

//get the info from the inputs and store them in vars
const txtName=document.getElementById("petName");
const txtAge=document.getElementById("petAge");
const txtGender=document.getElementById("petGender");
const txtBreed=document.getElementById("petBreed");
const selectService=document.getElementById("petService");
const txtOwner=document.getElementById("petOwner");
const txtContactPhone=document.getElementById("petContactPhone");
//create the object constructor for the Pets
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}
//create the objects
const scooby=new Pet("Scooby",50,"Male","Dane","Full Service","Shaggy","555-555-5555");
const scrappy=new Pet("Scrappy",4,"Male","Dane","Nails Cut","Shaggy","555-555-5555");
const snoopy=new Pet("Snoopy",5,"Male","Beagle","Full Service","Shaggy","555-555-5555");
//push the objects into the pets array
pets.push(scooby);
pets.push(scrappy);
pets.push(snoopy);

function Register(){
    //create a generic object
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,selectService.value,txtOwner.value,txtContactPhone.value);
    pets.push(thePet);
    console.log(thePet);
    Display();
}

//Extra HW: Display the oldest pet and youngest pet
Display();

