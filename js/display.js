const container=document.getElementById("pets");
function Display(){
    document.getElementById("pets").innerHTML="";
    //travel the array
    for(var i=0;i<salon.pets.length;i++){
        //create the template string
        var tmp=`<div class="pet">
            <h2>${salon.pets[i].name}</h2>
            <p>Age: ${salon.pets[i].age} </p>
            <p>Gender: ${salon.pets[i].gender} </p>
            <p>Breed: ${salon.pets[i].breed} </p>
            <p>Service: ${salon.pets[i].service} </p>
            <p>Owner: ${salon.pets[i].owner} </p>
            <p>Phone: ${salon.pets[i].contactPhone} </p>
        </div>`;
        //inject the template on the html
        container.innerHTML+=tmp;
    }   
}

