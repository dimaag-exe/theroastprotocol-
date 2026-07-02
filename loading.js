
const bar = document.getElementById("bar");

const status = document.getElementById("status");

let width = 0;

const messages = [

"Initializing AI...",

"Scanning Memory...",

"Checking Common Sense...",

"Comparing With Einstein...",

"Checking Google Dependency...",

"Preparing Roast..."

];

let i = 0;

const interval = setInterval(()=>{

width++;

bar.style.width = width+"%";

if(width%20===0 && i<messages.length){

status.innerText=messages[i];

i++;

}

if(width>=100){

clearInterval(interval);

window.location.href="result.html";

}

},50);
