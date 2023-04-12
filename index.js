console.log("My name is surya and this is my first JS code!");
console.log("I am starting to love JS!");
console.log("The theme is killing!");
 
window.alert("I want to live like John Wick!");

let theme="Killing";
let hero="John Wick";
let movies=4;
let favourite="John Wick - Chapter 4";

document.getElementById("p1").innerHTML="The theme of this website is " + theme + ".";
document.getElementById("p2").innerHTML="My favourite assassin is " + hero + ".";
document.getElementById("p3").innerHTML="There are totally " + movies + " films in this series.";
document.getElementById("p4").innerHTML="My favourite movie of him is " + favourite + ".";

let kar=window.prompt("Really?");

let paer;
document.getElementById("mybutton").onclick=function(){
    paer=document.getElementById("mytext").value;
    document.getElementById("p5").innerHTML="Hi " + paer + "!";
    console.log("User input is " + paer);
}

const PI=3.14;
let radius;
let circumference;
document.getElementById("mybutton2").onclick=function(){
    radius=document.getElementById("mynumber").value;
    circumference=2*PI*radius;
    document.getElementById("p6").innerHTML="The circumference is " + circumference + ".";
}

let oppside;
let adjside;
document.getElementById("mybutton3").onclick=function(){
    oppside=document.getElementById("mynumber2").value;
    document.getElementById("mybutton4").onclick=function(){
        adjside=document.getElementById("mynumber3").value;
        hypside=Math.sqrt((oppside*oppside)+(adjside*adjside));
    document.getElementById("p7").innerHTML="The hypotenuse is " + hypside + ".";
}
}

let count=0;
document.getElementById("decrease").onclick=function(){
    count-=1;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;
}
document.getElementById("increase").onclick=function(){
    count+=1;
    document.getElementById("countlabel").innerHTML=count;
}

let dice;
dice=Math.round(Math.random()*6);
document.getElementById("roll").onclick=function(){
    document.getElementById("waitlabel").innerHTML=dice;
}

const mynum=Math.ceil(Math.random()*10);
let guesses=0; 
document.getElementById("submitbutton").onclick=function(){
    let guess=document.getElementById("numberid").value;
    guesses+=1;
    if(guess==mynum){
        document.getElementById("p10").innerHTML="The computer number is " + mynum + " and your guess is same as the computer guess!";
    }
    else if(guess>mynum){
        document.getElementById("p11").innerHTML="The computer number is " + mynum + " and your guess is more than the computer guess!";
    }
    else{
        document.getElementById("p12").innerHTML="The computer number is " + mynum + " and your guess is less than the computer guess!";
    }
}