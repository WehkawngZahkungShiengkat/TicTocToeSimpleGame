var C1 = document.querySelector("#c1");
var C2 = document.querySelector("#c2");
var C3 = document.querySelector("#c3");
var C4 = document.querySelector("#c4");
var C5 = document.querySelector("#c5");
var C6 = document.querySelector("#c6");
var C7 = document.querySelector("#c7");
var C8 = document.querySelector("#c8");
var C9 = document.querySelector("#c9");
var x = document.querySelector("#X");
var o = document.querySelector("#O");
var T = document.querySelector("#tbl");
var arrCs = {1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false}
var arUch = [];
var arNch = [];
// to add one to string number
function addOne(s) {
    let newNumber = '';
    let continueAdding = true;
    for (let i = s.length - 1; i>= 0; i--) {
        if (continueAdding) {
            let num = parseInt(s[i], 10) + 1;
            if (num < 10) {
                newNumber += num;
                continueAdding = false;
            } else {
                newNumber += '0';
            }
        } else {
            newNumber +=s[i];
        }
    }
    return newNumber.split("").reverse().join("");
}

// to highlight the mouseover

C1.addEventListener("mouseover",function(){
  if (C1.textContent==" "){
    C1.style.backgroundColor = "lightblue";
  }else {
    C1.style.backgroundColor = "red";
  }
})
C1.addEventListener("mouseout",function(){
  C1.style.backgroundColor = "rgba(0,0,0,0)";
})

C2.addEventListener("mouseover",function(){
  if (C2.textContent==" "){
    C2.style.backgroundColor = "lightblue";
  }else {
    C2.style.backgroundColor = "red";
  }
})
C2.addEventListener("mouseout",function(){
  C2.style.backgroundColor = "rgba(0,0,0,0)";
})

C3.addEventListener("mouseover",function(){
  if (C3.textContent==" "){
    C3.style.backgroundColor = "lightblue";
  }else {
    C3.style.backgroundColor = "red";
  }
})
C3.addEventListener("mouseout",function(){
  C3.style.backgroundColor = "rgba(0,0,0,0)";
})

C4.addEventListener("mouseover",function(){
  if (C4.textContent==" "){
    C4.style.backgroundColor = "lightblue";
  }else {
    C4.style.backgroundColor = "red";
  }
})
C4.addEventListener("mouseout",function(){
  C4.style.backgroundColor = "rgba(0,0,0,0)";
})

C5.addEventListener("mouseover",function(){
  if (C5.textContent==" "){
    C5.style.backgroundColor = "lightblue";
  }else {
    C5.style.backgroundColor = "red";
  }
})
C5.addEventListener("mouseout",function(){
  C5.style.backgroundColor = "rgba(0,0,0,0)";
})

C6.addEventListener("mouseover",function(){
  if (C6.textContent==" "){
    C6.style.backgroundColor = "lightblue";
  }else {
    C6.style.backgroundColor = "red";
  }
})
C6.addEventListener("mouseout",function(){
  C6.style.backgroundColor = "rgba(0,0,0,0)";
})

C7.addEventListener("mouseover",function(){
  if (C7.textContent==" "){
    C7.style.backgroundColor = "lightblue";
  }else {
    C7.style.backgroundColor = "red";
  }
})
C7.addEventListener("mouseout",function(){
  C7.style.backgroundColor = "rgba(0,0,0,0)";
})

C8.addEventListener("mouseover",function(){
  if (C8.textContent==" "){
    C8.style.backgroundColor = "lightblue";
  }else {
    C8.style.backgroundColor = "red";
  }
})
C8.addEventListener("mouseout",function(){
  C8.style.backgroundColor = "rgba(0,0,0,0)";
})

C9.addEventListener("mouseover",function(){
  if (C9.textContent==" "){
    C9.style.backgroundColor = "lightblue";
  }else {
    C9.style.backgroundColor = "red";
  }
})
C9.addEventListener("mouseout",function(){
  C9.style.backgroundColor = "rgba(0,0,0,0)";
})

x.addEventListener("mouseover",function(){
  if (x.style.backgroundColor != "lightgreen"){
    x.style.backgroundColor = "lightblue";
  }
})
x.addEventListener("mouseout",function(){
  if (x.style.backgroundColor != "lightgreen"){
    x.style.backgroundColor = "silver";
  }
})
o.addEventListener("mouseover",function(){
  if (o.style.backgroundColor != "lightgreen"){
    o.style.backgroundColor = "lightblue";
  }
})
o.addEventListener("mouseout",function(){
  if (o.style.backgroundColor != "lightgreen"){
    o.style.backgroundColor = "silver";
  }
})

x.addEventListener("click",function(){
  x.style.backgroundColor = "lightgreen";
  o.style.backgroundColor = "silver";
})
o.addEventListener("click",function(){
  o.style.backgroundColor = "lightgreen";
  x.style.backgroundColor = "silver";
})

function ColorSwtch(cx=x,co=o){
  if (cx.style.backgroundColor == "lightgreen"){
    cx.style.backgroundColor = "silver";
    co.style.backgroundColor = "lightgreen";
  }else if(o.style.backgroundColor == "lightgreen"){
    co.style.backgroundColor = "silver";
    cx.style.backgroundColor = "lightgreen";
  }
}

function getuChoice(fx=x,fo=o){
  var uchoice = " ";
  if (fx.style.backgroundColor == "lightgreen"){
    uchoice = "X";
  }else if (fo.style.backgroundColor == "lightgreen"){
    uchoice = "O";
  }
  ColorSwtch();
  return uchoice
}

function NoChoice(fx=x,fo=o){
  var uchoice = " ";
  if (fx.style.backgroundColor == "lightgreen"){
    uchoice = "O";
  }else if (fo.style.backgroundColor == "lightgreen"){
    uchoice = "X";
  }
  return nchoice
}
// console.log("pass1");
// if (Object.keys(arrCs).length == 9 && getuChoice() == "O"){
//   console.log("pass2");
//   var fcarray = ["#c1","#c2","#c3","#c4","#c5","#c6","#c7","#c8","#c9"];
//   var rn = Math.floor(Math.random() * 10);
//   var C = document.querySelector(fcarray[rn]);
//   C.textContent=NoChoice();
//   delete arrCs[rn];
// }

C1.addEventListener("click",function(){
  if (C1.textContent == " "){
    C1.textContent=getuChoice();
    delete arrCs[1];
    arUch.push(1);
  }
})
C2.addEventListener("click",function(){
  if (C2.textContent == " "){
    C2.textContent=getuChoice();
    delete arrCs[2];
    arUch.push(2);
  }
})
C3.addEventListener("click",function(){
  if (C3.textContent == " "){
    C3.textContent=getuChoice();
    delete arrCs[3];
    arUch.push(3);
  }
})
C4.addEventListener("click",function(){
  if (C4.textContent == " "){
    C4.textContent=getuChoice();
    delete arrCs[4];
    arUch.push(4);
  }
})

C5.addEventListener("click",function(){
  if (C5.textContent == " "){
    C5.textContent=getuChoice();
    delete arrCs[5];
    arUch.push(5);
  }
})
C6.addEventListener("click",function(){
  if (C6.textContent == " "){
    C6.textContent=getuChoice();
    delete arrCs[6];
    arUch.push(6);
  }
})
C7.addEventListener("click",function(){
  if (C7.textContent == " "){
    C7.textContent=getuChoice();
    delete arrCs[7];
    arUch.push(7);
  }
})
C8.addEventListener("click",function(){
  if (C8.textContent == " "){
    C8.textContent=getuChoice();
    delete arrCs[8];
    arUch.push(8);
  }
})
C9.addEventListener("click",function(){
  if (C9.textContent == " "){
    C9.textContent=getuChoice();
    delete arrCs[9];
    arUch.push(9);
  }
})
