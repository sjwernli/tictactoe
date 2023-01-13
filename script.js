//variables for spaces buttons
var a1=document.getElementById("A1");
var b1=document.getElementById("B1");
var c1=document.getElementById("C1");
var a2=document.getElementById("A2");
var b2=document.getElementById("B2");
var c2=document.getElementById("C2");
var a3=document.getElementById("A3");
var b3=document.getElementById("B3");
var c3=document.getElementById("C3"); 
//arrays
var buttons=["A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3"];
var spaces=[0,1,2,3,4,5,6,7,8];
var randNum;
//variables
var player = document.getElementById("player");
var count = 1;
var stat=0;
var n;
var index;
var play = document.getElementById("start");
//Event listeners row 1
play.addEventListener("click", gamePlay);
a1.addEventListener("mouseenter", na1) ;
a1.addEventListener("mouseleave", na1);
a1.addEventListener("click", na1);
a1.addEventListener("mouseenter", cross) ;
a1.addEventListener("mouseleave", clear);
a1.addEventListener("click", round);
b1.addEventListener("click", nb1);
b1.addEventListener("mouseenter", nb1) ;
b1.addEventListener("mouseleave", nb1);
b1.addEventListener("click", round);
b1.addEventListener("mouseenter", cross) ;
b1.addEventListener("mouseleave", clear);
c1.addEventListener("click", nc1);
c1.addEventListener("mouseenter", nc1) ;
c1.addEventListener("mouseleave", nc1);
c1.addEventListener("click", round);
c1.addEventListener("mouseenter", cross) ;
c1.addEventListener("mouseleave", clear);
//row 2
a2.addEventListener("mouseenter", na2) ;
a2.addEventListener("mouseleave", na2);
a2.addEventListener("click", na2);
a2.addEventListener("mouseenter", cross) ;
a2.addEventListener("mouseleave", clear);
a2.addEventListener("click", round);
b2.addEventListener("click", nb2);
b2.addEventListener("mouseenter", nb2) ;
b2.addEventListener("mouseleave", nb2);
b2.addEventListener("click", round);
b2.addEventListener("mouseenter", cross) ;
b2.addEventListener("mouseleave", clear);
c2.addEventListener("click", nc2);
c2.addEventListener("mouseenter", nc2) ;
c2.addEventListener("mouseleave", nc2);
c2.addEventListener("click", round);
c2.addEventListener("mouseenter", cross) ;
c2.addEventListener("mouseleave", clear);
//row 3
a3.addEventListener("mouseenter", na3) ;
a3.addEventListener("mouseleave", na3);
a3.addEventListener("click", na3);
a3.addEventListener("mouseenter", cross) ;
a3.addEventListener("mouseleave", clear);
a3.addEventListener("click", round);
b3.addEventListener("click", nb3);
b3.addEventListener("mouseenter", nb3) ;
b3.addEventListener("mouseleave", nb3);
b3.addEventListener("click", round);
b3.addEventListener("mouseenter", cross) ;
b3.addEventListener("mouseleave", clear);
c3.addEventListener("click", nc3);
c3.addEventListener("mouseenter", nc3) ;
c3.addEventListener("mouseleave", nc3);
c3.addEventListener("click", round);
c3.addEventListener("mouseenter", cross) ;
c3.addEventListener("mouseleave", clear);
//arrays
var score1=[9,9,9,9,9,9,9,9,9];
var score2=[9,9,9,9,9,9,9,9,9];
//functions to set a value for n
function na1(){
  n=0;
}
function nb1(){
  n=1;
}
function nc1(){
  n=2;
}
function na2(){
  n=3;
}
function nb2(){
  n=4;
}
function nc2(){
  n=5;
}
function na3(){
  n=6;
}
function nb3(){
  n=7;
}
function nc3(){
  n=8;
}
//restarts the game
function gamePlay(){
  score1=[9,9,9,9,9,9,9,9,9];
  score2=[9,9,9,9,9,9,9,9,9];
  spaces=[0,1,2,3,4,5,6,7,8];
  for (let i =0; i<9; i++){
    document.getElementById(buttons[i]).innerHTML="";
    document.getElementById(buttons[i]).disabled=false;
    document.getElementById(buttons[i]).style.color="#000000";
  }
  document.getElementById("winner").innerHTML="";
  count=1;
}
//disabled all buttons after someone wins
function endPlay(){
  for (let i =0; i<9; i++){
    document.getElementById(buttons[i]).disabled=true;
  }
}
//
function round(){
  if (checkScore()==true){
    endPlay();
  }
  else{
    document.getElementById(buttons[n]).style.color="#3526d4";
    document.getElementById(buttons[n]).innerHTML="X";
    score1[n]=n;
    document.getElementById(buttons[n]).disabled=true;
    spaces.splice(spaces.findIndex(findN), 1);
    computer();
  }
  
}
function findN(item){
  return item == n;
}
function findi(item){
  return item == index;
}
//shows x's when hovering over the buttons
function cross(){
    document.getElementById(buttons[n]).innerHTML="X";
}
function clear(){
  document.getElementById(buttons[n]).innerHTML="";
}
//checks if a player has won
function checkScore(){
  //row wins
  for (let i=0; i<9; i+=3){
    if(score1[i]==i && score1[i+1]==(i+1) && score1[i+2]==(i+2)){
      document.getElementById("winner").innerHTML="You win!";
      return true;
    }
    else if(score2[i]==i && score2[i+1]==(i+1) && score2[i+2]==(i+2)){
      document.getElementById("winner").innerHTML="Computer wins!";
      return true;
    }
  }
  //collumn wins
  for(let i=0; i<3; i++){
    if(score1[i]==i && score1[i+3]==(i+3) && score1[i+6]==(i+6)){
      document.getElementById("winner").innerHTML="You win!";
      return true;
    }
    else if(score2[i]==i && score2[i+3]==(i+3) && score2[i+6]==(i+6)){
      document.getElementById("winner").innerHTML="You win!";
      return true;
    }
  }
    //diagonal wins
  if((score1[0]==0 && score1[4]==4 && score1[8]==8)||(score1[2]==2 && score1[4]==4 && score1[6]==6)){
    document.getElementById("winner").innerHTML="You win!";
    return true;
  }
  else if((score2[0]==0 && score2[4]==4 && score2[8]==8)||(score2[2]==2 && score2[4]==4 && score2[6]==6)){
    document.getElementById("winner").innerHTML="Computer wins!";
    return true;
  }
  if (spaces.length==0){
    document.getElementById("winner").innerHTML="Tie!";
    return true;
  }
}
//random number generator (min:inclusive)(max:exclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function computer(){
  if (checkScore()==true){
    endPlay();
  }
  else{
    if (closeWin()==true){}
    else if (spaces.length>0){
      randNum=randInt(0,spaces.length);
      document.getElementById(buttons[spaces[randNum]]).style.color="#ed111c";
      document.getElementById(buttons[spaces[randNum]]).innerHTML="O";
      score2[spaces[randNum]]=spaces[randNum];
      document.getElementById(buttons[spaces[randNum]]).disabled=true;
      spaces.splice(randNum, 1);
    }
  }
  if (checkScore()==true){
    endPlay();
  }
}
function closeWin(){
  //top row to middle row
  //checks to see if the computer is about to win
  for(let i = 0; i<3; i++){
    if (score2[i]==i && score2[i+3]==i+3 && score2[i+6]!=i+6 && score1[i+6]!=i+6){
      document.getElementById(buttons[i+6]).style.color="#ed111c";
      document.getElementById(buttons[i+6]).innerHTML="O";
      score2[i+6]=i+6;
      document.getElementById(buttons[i+6]).disabled=true;
      index = i+6;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //middle row to bottom row
    else if (score2[i+3]==i+3 && score2[i+6]==i+6 && score2[i]!=i && score1[i]!=i){
      document.getElementById(buttons[i]).style.color="#ed111c";
      document.getElementById(buttons[i]).innerHTML="O";
      score2[i]=i;
      document.getElementById(buttons[i]).disabled=true;
      index = i;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //top row to bottom row
    else if(score2[i]==i && score2[i+6]==i+6 && score2[i+3]!=i+3 && score1[i+3]!=i+3){
      document.getElementById(buttons[i+3]).style.color="#ed111c";
      document.getElementById(buttons[i+3]).innerHTML="O";
      score2[i+3]=i+3;
      document.getElementById(buttons[i+3]).disabled=true;
      index = i+3;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //left collumn middle collumn
    else if(score2[i*3]==i*3 && score2[i*3+1]==i*3+1 && score2[i*3+2]!=i*3+2 && score1[i*3+2]!=i*3+2){
      document.getElementById(buttons[i*3+2]).style.color="#ed111c";
      document.getElementById(buttons[i*3+2]).innerHTML="O";
      score2[i*3+2]=i*3+2;
      document.getElementById(buttons[i*3+2]).disabled=true;
      index = i*3+2;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    else if(score2[i*3+2]==i*3+2 && score2[i*3+1]==i*3+1 && score2[i*3]!=i*3 && score1[i*3]!=i*3){
      document.getElementById(buttons[i*3]).style.color="#ed111c";
      document.getElementById(buttons[i*3]).innerHTML="O";
      score2[i*3]=i*3;
      document.getElementById(buttons[i*3]).disabled=true;
      index = i*3;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    else if(score2[i*3+2]==i*3+2 && score2[i*3]==i*3 && score2[i*3+1]!=i*3+1 && score1[i*3+1]!=i*3+1){
      document.getElementById(buttons[i*3+1]).style.color="#ed111c";
      document.getElementById(buttons[i*3+1]).innerHTML="O";
      score2[i*3+1]=i*3+1;
      document.getElementById(buttons[i*3]).disabled=true;
      index = i*3+1;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
  }
  //diagonal checks
  if(score2[0]==0 && score2[4]==4 && score2[8]!=8 && score1[8]!=8){
    document.getElementById(buttons[8]).style.color="#ed111c";
    document.getElementById(buttons[8]).innerHTML="O";
    score2[8]=8;
    document.getElementById(buttons[8]).disabled=true;
    index = 8;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score2[0]==0 && score2[8]==8 && score2[4]!=4 && score1[4]!=4){
    document.getElementById(buttons[4]).style.color="#ed111c";
    document.getElementById(buttons[4]).innerHTML="O";
    score2[4]=4;
    document.getElementById(buttons[4]).disabled=true;
    index = 4;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score2[4]==4 && score2[8]==8 && score2[0]!=0 && score1[0]!=0){
    document.getElementById(buttons[0]).style.color="#ed111c";
    document.getElementById(buttons[0]).innerHTML="O";
    score2[0]=0;
    document.getElementById(buttons[0]).disabled=true;
    index = 0;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  //other diagonal
  else if(score2[2]==2 && score2[4]==4 && score2[6]!=6 && score1[6]!=6){
    document.getElementById(buttons[6]).style.color="#ed111c";
    document.getElementById(buttons[6]).innerHTML="O";
    score2[6]=6;
    document.getElementById(buttons[6]).disabled=true;
    index = 6;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score2[2]==2 && score2[6]==6 && score2[4]!=4 && score1[4]!=4){
    document.getElementById(buttons[4]).style.color="#ed111c";
    document.getElementById(buttons[4]).innerHTML="O";
    score2[4]=4;
    document.getElementById(buttons[4]).disabled=true;
    index = 4;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score2[4]==4 && score2[6]==6 && score2[2]!=2 && score1[2]!=2){
    document.getElementById(buttons[2]).style.color="#ed111c";
    document.getElementById(buttons[2]).innerHTML="O";
    score2[2]=2;
    document.getElementById(buttons[2]).disabled=true;
    index = 2;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  //opponent diagonals
  else if(score1[0]==0 && score1[4]==4 && score2[8]!=8 && score1[8]!=8){
    document.getElementById(buttons[8]).style.color="#ed111c";
    document.getElementById(buttons[8]).innerHTML="O";
    score2[8]=8;
    document.getElementById(buttons[8]).disabled=true;
    index = 8;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score1[0]==0 && score1[8]==8 && score2[4]!=4 && score1[4]!=4){
    document.getElementById(buttons[4]).style.color="#ed111c";
    document.getElementById(buttons[4]).innerHTML="O";
    score2[4]=4;
    document.getElementById(buttons[4]).disabled=true;
    index = 4;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score1[4]==4 && score1[8]==8 && score2[0]!=0 && score1[0]!=0){
    document.getElementById(buttons[0]).style.color="#ed111c";
    document.getElementById(buttons[0]).innerHTML="O";
    score2[0]=0;
    document.getElementById(buttons[0]).disabled=true;
    index = 0;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  //other diagonal
  else if(score1[2]==2 && score1[4]==4 && score2[6]!=6 && score1[6]!=6){
    document.getElementById(buttons[6]).style.color="#ed111c";
    document.getElementById(buttons[6]).innerHTML="O";
    score2[6]=6;
    document.getElementById(buttons[6]).disabled=true;
    index = 6;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score1[2]==2 && score1[6]==6 && score2[4]!=4 && score1[4]!=4){
    document.getElementById(buttons[4]).style.color="#ed111c";
    document.getElementById(buttons[4]).innerHTML="O";
    score2[4]=4;
    document.getElementById(buttons[4]).disabled=true;
    index = 4;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  else if(score1[4]==4 && score1[6]==6 && score2[2]!=2 && score1[2]!=2){
    document.getElementById(buttons[2]).style.color="#ed111c";
    document.getElementById(buttons[2]).innerHTML="O";
    score2[2]=2;
    document.getElementById(buttons[2]).disabled=true;
    index = 2;
    spaces.splice(spaces.findIndex(findi), 1);
    return true;
  }
  for(let i = 0; i<3; i++){
    //checks to see if the opponent is about to win
    if (score1[i]==i && score1[i+3]==i+3 && score2[i+6]!=i+6 && score1[i+6]!=i+6){
      document.getElementById(buttons[i+6]).style.color="#ed111c";
      document.getElementById(buttons[i+6]).innerHTML="O";
      score2[i+6]=i+6;
      document.getElementById(buttons[i+6]).disabled=true;
      index = i+6;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //middle row to bottom row
    else if (score1[i+3]==i+3 && score1[i+6]==i+6 && score2[i]!=i && score1[i]!=i){
      document.getElementById(buttons[i]).style.color="#ed111c";
      document.getElementById(buttons[i]).innerHTML="O";
      score2[i]=i;
      document.getElementById(buttons[i]).disabled=true;
      index = i;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //top row to bottom row
    else if(score1[i]==i && score1[i+6]==i+6 && score2[i+3]!=i+3 && score1[i+3]!=i+3){
      document.getElementById(buttons[i+3]).style.color="#ed111c";
      document.getElementById(buttons[i+3]).innerHTML="O";
      score2[i+3]=i+3;
      document.getElementById(buttons[i+3]).disabled=true;
      index = i+3;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    //left collumn middle collumn
    else if(score1[i*3]==i*3 && score1[i*3+1]==i*3+1 && score2[i*3+2]!=i*3+2 && score1[i*3+2]!=i*3+2){
      document.getElementById(buttons[i*3+2]).style.color="#ed111c";
      document.getElementById(buttons[i*3+2]).innerHTML="O";
      score2[i*3+2]=i*3+2;
      document.getElementById(buttons[i*3+2]).disabled=true;
      index = i*3+2;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    else if(score1[i*3+2]==i*3+2 && score1[i*3+1]==i*3+1 && score2[i*3]!=i*3 && score1[i*3]!=i*3){
      document.getElementById(buttons[i*3]).style.color="#ed111c";
      document.getElementById(buttons[i*3]).innerHTML="O";
      score2[i*3]=i*3;
      document.getElementById(buttons[i*3]).disabled=true;
      index = i*3;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
    else if(score1[i*3+2]==i*3+2 && score1[i*3]==i*3 && score2[i*3+1]!=i*3+1 && score1[i*3+1]!=i*3+1){
      document.getElementById(buttons[i*3+1]).style.color="#ed111c";
      document.getElementById(buttons[i*3+1]).innerHTML="O";
      score2[i*3+1]=i*3+1;
      document.getElementById(buttons[i*3]).disabled=true;
      index = i*3+1;
      spaces.splice(spaces.findIndex(findi), 1);
      return true;
    }
  }
  return false;
}
