const btn = document.getElementById("startBtn");

btn.addEventListener("click",()=>{

    const name = document.getElementById("username").value.trim();

    const category = document.getElementById("category").value;

    if(name===""){

        alert("Please enter your name 😭");

        return;

    }

    if(category===""){

        alert("Choose a subject first 🤓");

        return;

    }

    localStorage.setItem("username",name);

    localStorage.setItem("category",category);

    window.location.href="pages/categories.html";

});

function selectCategory(category){

localStorage.setItem("category",category);

window.location.href="quiz.html";

}

