//Movement animation
const card = document.querySelector (".card");
const container = document.querySelector (".container");

//Items
const tittle = document.querySelector ('.tittle');
const telefon = document.querySelector ('.telefon img');
const purchase = document.querySelector ('.purchase button');
const description = document.querySelector ('.info h3');
const sizes = document.querySelector ('.sizes');

//Moving animation event 
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /20;
    let yAxis = (window.innerHeight / 2 - e.pageY) /20;
    card.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popout
    tittle.style.transform = "translateZ(150px)";
    telefon.style.transform = "translateZ(200px) rotateZ(-20deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(125px)";
    purchase.style.transform = "translateZ(125px)";
});


//Animate Out
container.addEventListener("mouseleave", (e)=> {
    card.style.transition = "all 0.5s ease ";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    tittle.style.transform = "translateZ(0px)";
    telefon.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
