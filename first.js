let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice =() =>{
    const options =["rock", "paper", "scissors"];
    const randIdx =Math.floor(Math.random() * 3 );
    return options[randIdx];

};

//fpr draw game
const drawGame = ()=>{

 msg.innerText="It's a Draw. Play Again!"
 msg.style.backgroundColor= "#081b31";
};

const showWinner =(userWin,userChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }


}

const playGame= (userChoice) =>{
    console.log ("user choice=", userChoice);
  //generate comp choce;
  const compChoice=genComputerChoice();
  console.log("comp choice=", compChoice);

  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice==="rock"){
        //paper, scissors
         userWin=compChoice==="paper"? false :true;
    }
    else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        //rrock,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin ,userChoice,compChoice);
  }
};

const audio=new Audio();
audio.src="./sound.mp3";



choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       
   
    playGame(userChoice);
    audio.play(audio);
    });
});
   
