var inputs=document.getElementsByTagName('input');
console.log(inputs);

for(var i=0;i<inputs.length;i++){
    inputs[i].setAttribute('class', 'gray-bg');
    console.log(inputs[i]);
}
var name="Jeff", job="Software Developer";
console.log(`Name: ${name} Job: ${job}`);

var content=document.getElementById("pets");

// let html="<ul>" + 
//             "<li>" + name + "</li>"+
//             "<li>" + job + "</li>"+
//             "</ul>";


let html2=`<ul>
            <li>${name}</li>
            <li>${job}</li>


`;

content.innerHTML=html2;
