// =======================================
// FOR SUMU ❤️
// SCRIPT.JS
// =======================================

// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loading-screen").style.display="none";

},3000);

});

// =========================
// Letter Scroll Animation
// =========================

const letter=document.querySelector(".letter");

window.addEventListener("scroll",()=>{

const top=letter.getBoundingClientRect().top;

if(top<window.innerHeight-120){

letter.classList.add("show");

}

});

// =========================
// Typing Animation
// =========================

const title=document.querySelector(".title p");

const message="Every flower blooms beautifully... But none of them can match your smile.";

title.innerHTML="";

let i=0;

function typing(){

if(i<message.length){

title.innerHTML+=message.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();

// =========================
// Create Random Stars
// =========================

const stars=document.querySelector(".stars");

for(let i=0;i<180;i++){

let star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(2+Math.random()*5)+"s";

stars.appendChild(star);

}

// =========================
// Fireflies
// =========================

const fire=document.querySelector(".fireflies");

for(let i=0;i<25;i++){

let fly=document.createElement("div");

fly.className="fly";

fly.style.left=Math.random()*100+"%";

fly.style.top=Math.random()*100+"%";

fly.style.animationDuration=(8+Math.random()*8)+"s";

fly.style.animationDelay=Math.random()*5+"s";

fire.appendChild(fly);

}

// =========================
// Falling Petals
// =========================

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(15+Math.random()*25)+"px";

petal.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,700);

// =========================
// Floating Hearts
// =========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.className="love";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*22)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,1200);

// =========================
// Flower Bloom Delay
// =========================

document.querySelectorAll(".lily").forEach((flower,index)=>{

flower.style.animationDelay=index+"s";

});

document.querySelectorAll(".rajanigandha").forEach((flower,index)=>{

flower.style.animationDelay=(index+1)+"s";

});

// =========================
// Moon Glow Pulse
// =========================

setInterval(()=>{

document.querySelector(".moon").classList.toggle("pulse");

},3000);

// =========================
// Romantic Console Message ❤️
// =========================

console.log("For Sumu ❤️");

console.log("May every flower remind you of happiness.");
