let gameseq=[];
let userseq=[];
let started=false;
  let level=0;
  colors=["yellow","red","purple","green"];


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        
        started=true;

       levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout (function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText= " levelup"+level;
    let randInd = Math.floor(Math.random()*3);
    let randColr= colors[randInd];
    let randBtn=document.querySelector(`.${randColr}`)
    // console.log(randInd);
    // console.log(randBtn);
    // console.log(randColr);
    gameseq.push(randColr);
    console.log(gameseq);
    gameflash(randBtn);
}
 function chickAns(idx) {
    // console.log("current level chak",level);
    // let idx= level-1;
    if(userseq[idx]==gameseq[idx]){
       if(userseq.length==gameseq.length){
       setTimeout(levelup,150)
       }
    }else{
        h2.innerHTML= `game is over! your score was <br> ${level} </br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#8b541d";
        },150);
        reset();
    }
 }


    function btnpress(){
        // console.log(this)
   let btn=this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
  userseq.push(userColor);
  chickAns(userseq.length-1);
}
   
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnpress)
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;

}

