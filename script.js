
let alphabetsDiv = document.getElementById('alphabetbuttons') // Alphebet Buttons Div
let alphabetsUl = document.createElement('ul') // Ul  in the alphabetbuttons div to hold the li's of letters
let life = 5  //Total lives in the game
let lifecountdown=document.getElementById('countdown') // The label element that racks the life countdown
let footerImg = document.getElementById('footer2')
//Audio on click of guess letter
let audio= new Audio("./Images/drip.mp3")
//Tracing wins and loses
let wins = 0
let loses = 0
let winsP = document.getElementById('wins')
let losesP = document.getElementById('loses')
//Displaying the Initial screen on the load of windows
window.onload = function(){
    
    alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z']
    alphabetsUl.id = 'alphabet' // setting an id to th ul 
    alphabetsDiv.appendChild(alphabetsUl) 
    for(let i=0; i<alphabetsArray.length; i++){
 
        let list = document.createElement('li'); //the li's in alphabet UL
        list.id = 'letter'; // set the id to the li's
        list.innerHTML = alphabetsArray[i].toUpperCase();
        alphabetsUl.appendChild(list);

    }
    //Randomly choose a question and corresponding answer
    selectQuestion()
    displayAnswer()
    //Variables to track, user guess and match with answer
    let answerLength =  answer[gameNumber].length
    let answerArray =[]
    let remainingLetters = answerLength
    //Verifying userChoice with answer, tracks if the user anser is correct and the answer is updated
    let updated = 0
    var img=document.createElement("img");
    
    //Event listener to capture the li selected by user and verifying if the guess is correct. If the guess is correct, the answer is displayed else the hangman graphic is shown

    alphabetsUl.addEventListener('click', function(e){
    audio.play()
    let answerli = document.getElementById('answer').querySelectorAll('li')
    console.log(e)
    console.log(answerli)    
    console.log(lifecountdown)

    let guess = e.target.textContent //The letter guessed by the user
    if (life > 0 && remainingLetters >0)
    {
        updated = 0
        console.log(`life ${life}`)
        console.log(guess)
        //loop the word letters and if guess matches, populate the answer array with matches at all letter position in the word 
        for(i=0 ; i< answerLength ;i++){
          
            if (answer[gameNumber].charAt(i) === guess){
                 answerArray[i]=guess
                 answerli[i].textContent = guess
                 remainingLetters--
                 console.log(`Answer array ${answerArray}`)
                 console.log(`Remaining Letters ${remainingLetters}`)
                 updated=1
                console.log(`updated in for loop ${updated}`)
               e.target.remove()
                
            }
            else{
                   continue
            }         
        }
        //If guess is incorrect the life is decremented and image updated
        if( updated === 0){
            life--
            lifecountdown.textContent = 'You have '+ life + ' lives remaining'
            img.src=`./Images/img${5-life}.jpg`
            footerImg.appendChild(img)
        }    
   //Action to be taken when the game is lost
        if(life == 0){
            loses++ //Incrementing loses count
            losesP.innerHTML = `Loses : ${loses}`
        console.log('All lives taken')
       // alert ('All lives taken, Hit Reset to continue')
       statusMessage.textContent = 'All lives taken, Hit Reset for the Next Qestion!!' 
       modal.style.display = "block";
        }
    //Action to be taken when the game is won
        if(remainingLetters <= 0){
            wins++ //Incrementing wins count
            winsP.innerHTML = `Wins : ${wins}`
        console.log('Word Completed')
        //alert ('You Win the Game!!! Next Question is here for you')
        statusMessage.textContent = 'You Win the Game!!!Hit Reset for the Next Question' 
        modal.style.display = "block";
        }
    }

     })

  
     // Capturing the reset event click
     let resetButton = document.getElementById('reset')
     resetButton.addEventListener('click', resetScreen)
    // Code for reset button
     // Getting a random question and corresponding answer. Updating the life Countdown, Other variables
     //Recreating the alphabets UI with the letters , Removing the image
    function resetScreen(){
        questionDiv.removeChild(questionDiv.firstElementChild)
        selectQuestion()
        answerDiv.innerHTML =''
        displayAnswer()
        hintp.innerHTML =''
        lifecountdown.textContent =' Life CountDown'
        answerLength =  answer[gameNumber].length
         answerArray =[]
         remainingLetters = answerLength
         updated = 0
        life = 5
        alphabetsUl.innerHTML =''
        footerImg.innerHTML =''
         for(let i=0; i<alphabetsArray.length; i++){
 
             let list = document.createElement('li'); //the li's in alphabet UL
             list.id = 'letter'; // settthe id to the li's
             list.innerHTML = alphabetsArray[i].toUpperCase();
             alphabetsUl.appendChild(list);

         }
    }

}

//Hangman Questions,Answers and Hints ....Basic Setup
let question =['In which state did the first official American baseball game take place','Name the world’s biggest island','Which country has the most natural lakes','Which country borders 14 nations and crosses 8 time zones','What can be broken but can never be physically held','Which country won the first-ever soccer World Cup ',' Name of a city in US','An NBA Team name','Name of an endangered animal','Which state in US is called the Sunshine State','Which state in US is called The Peach State','Which state in US is called The Grand Canyon State','An extinct Bird']
let answer =[ 'NEWJERSEY','GREENLAND','CANADA','RUSSIA','PROMISE','URUGUAY','ATLANTA','LALAKERS','KIWI','FLORIDA','GEORGIA','ARIZONA','DODO']
let hintresponse =['A Northeastern state','It is not so Green','Our Neighbor','You might not want to talk about this country now','You give this to others','This team Defeated Argentina in 1930 soccer World Cup','A Southern City in US','Remember James!','Similar to a fruit' ,'Down South','Home of hawks','Answer is in the quesion','DO is the key']
let gameNumber 

//Code to select a random Question
let questionDiv = document.getElementById('question')
function selectQuestion(){
      
    let p = document.createElement('p')
    questionDiv.appendChild(p)
    gameNumber = Math.floor(Math.random()*question.length)
    p.textContent = question[gameNumber]
}


//Code to display the answer word as blanks
let answerDiv = document.getElementById('answer')
function displayAnswer(){
    let answerLength= answer[gameNumber].length
    let answerDiv = document.getElementById('answer')

    for(let i=0; i<answerLength; i++){
 
        let answerlist = document.createElement('li');
        answerlist.id = 'ansletter';
        answerlist.innerHTML = '_';
        answerDiv.appendChild(answerlist);

    }
}

//Code to populate the corresponding hint
let hintresponseDiv= document.getElementById('hintresponse')
let hintp = document.createElement('p')
hintresponseDiv.appendChild(hintp)
function hintClick(){

    hintp.innerHTML = 'Your Hint -- '+ hintresponse[gameNumber]

}

let hintButton = document.getElementById('hint')
hintButton.addEventListener('click', hintClick)


//Code for Modal to display win and loose Status
let modal =document.getElementById("modal1")
let span =document.getElementsByClassName('close')[0];
let statusMessage =document.getElementById('gameStatus')
span.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }