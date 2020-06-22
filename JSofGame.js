var C = document.querySelectorAll(".cell");
var x = document.querySelector("#X");
var o = document.querySelector("#O");
var rstrt = document.querySelector("#restrt");
var Winn = document.querySelector("#Winner");
var arrL = {1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false};
var arrX = [];
var arrO = [];
var arrAll = [];

function Gstart(){
  for(var z=0;z<C.length;z++){
    C[z].textContent = " ";
  }
  Winn.textContent="";
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

rstrt.addEventListener("click",Gstart)

function mouseon1(){
  if (this.style.backgroundColor != "lightgreen"){
    this.style.backgroundColor = "lightblue";
  }
}

function mouseoff1(){
  if (this.style.backgroundColor != "lightgreen"){
    this.style.backgroundColor = "silver";
  }
}

function ChooseClk1(){
  if (this.style.backgroundColor != "lightgreen"){
    this.style.backgroundColor = "lightgreen";
  }
}

function ifOneClk(b){
  b.style.backgroundColor = "silver";
}

function mouseon(){
  if (this.textContent == " "){
    this.style.backgroundColor = "lightblue";
  }else {
    this.style.backgroundColor = "red";
  }
}

function mouseoff(){
  this.style.backgroundColor = "rgba(0,0,0,0)";
}

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

function splitStr(strIn){
  var toreturnN;
  var sl = strIn.split("");
  for(var slrun=1;slrun<10;slrun++){
    if (slrun == sl[sl.length-1]){
      toreturnN = slrun;
      break;
    }
  }
  return toreturnN;
}

function ChooseClk2(){
  if (this.textContent == " "){
    this.textContent=getuChoice();
    if (this.textContent != " "){
      var clked = this.textContent;
      if (clked == "X"){
        arrX.push(splitStr(this.id));
      }else if (clked == "O"){
        arrO.push(splitStr(this.id));
      }
    }
    var tf = Math.max(arrX.length,arrO.length);
    console.log(tf);
    if (Math.max(arrX.length,arrO.length)>2){
      var TheW = ChkWinner(arrX,"X");
      if (TheW === "NoYet"){
        TheW = ChkWinner(arrO,"O");
        if (TheW === "NoYet"){
          TheW = "NoYet";
        }
      }else{
        Winn.textContent=TheW;
        // Gstart();
      }
    }
  }
}

function diff(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
    return newA;
}

function ChkWinner(Lin,xo){
  winningL = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  for(inL of winningL){
    countTrue = 0;
    for(inNum of Lin){
      var CkNum = inL.includes(inNum);
      console.log(CkNum);
      if (CkNum === true && inL.length > 2){
        countTrue += 1;
      }
    }
    console.log(inL);
    if (countTrue===3){
      return "Player "+xo+" win";
      break;
    }
  }
  return "NoYet";
}

x.addEventListener("mouseover",mouseon1)
x.addEventListener("mouseout",mouseoff1)

o.addEventListener("mouseover",mouseon1)
o.addEventListener("mouseout",mouseoff1)

x.addEventListener("click",function(){
  x.style.backgroundColor = "lightgreen";
  o.style.backgroundColor = "silver";
})
o.addEventListener("click",function(){
  o.style.backgroundColor = "lightgreen";
  x.style.backgroundColor = "silver";
})

for(var z=0;z<C.length;z++){
  C[z].addEventListener("mouseover",mouseon)
  C[z].addEventListener("mouseout",mouseoff)
  C[z].addEventListener("click",ChooseClk2)
}
