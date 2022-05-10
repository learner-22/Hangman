
let alphabetsDiv = document.getElementById('alphabetbuttons') // Alphebet Buttons Div
let alphabetsUl = document.createElement('ul') // Ul  in the alphabetbuttons div to hold the li's of letters
let life = 5  //Total lives in the game
let lifecountdown=document.getElementById('countdown') // The label element that racks the life countdown
let footerImg = document.getElementById('footer2')

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

    let answerLength =  answer[gameNumber].length
    let answerArray =[]
    let remainingLetters = answerLength
    //Verifying userChoice with answer
    let updated = 0
  
    var img=document.createElement("img");
    
    alphabetsUl.addEventListener('click', function(e){
    let answerli = document.getElementById('answer').querySelectorAll('li')
   
      console.log(e)
    console.log(answerli)    
    console.log(lifecountdown)

    let guess = e.target.textContent
    if (life > 0 && remainingLetters >0)
    {
        updated = 0
        console.log(`Updated in outer if ${updated}`) 
        console.log(`life ${life}`)
        console.log(guess)
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
        if( updated === 0){
            life--
            lifecountdown.textContent = 'You have '+ life + ' lives remaining'
            img.src=`./Images/img${5-life}.jpg`
            footerImg.appendChild(img)
        }    
    // }
    // else{
        if(life ==0){
        console.log('All lives taken')
       // alert ('All lives taken, Hit Reset to continue')
       
        }
        if(remainingLetters <= 0){
        console.log('Word Completed')
        //alert ('You Win the Game!!! Next Question is here for you')
        
        }
    }

     })

  
     // Capturing the reset event click
     let resetButton = document.getElementById('reset')
     resetButton.addEventListener('click', resetScreen)
 // Code for reset button
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

let question =[' Name of a state in US','An NBA Team name','Name of an endangered animal','Which state in US is called the Sunshine State','Which state in US is called The Peach State','Which state in US is called The Grand Canyon State','An extinct Bird']
let answer =[ 'ATLANTA','LALAKERS','KIWI','FLORIDA','GEORGIA','ARIZONA','DODO']
let hintresponse =['A Southern City in USA','Remember James!','Similar to a fruit' ,'Down South','Home of hawks','Answer is in the quesion','DO is the key']
let gameNumber 

let questionDiv = document.getElementById('question')
function selectQuestion(){
    //let question =[' Name of a state in US','An NBA Team name','Name of an extinct animal']
    
    let p = document.createElement('p')
    questionDiv.appendChild(p)
    gameNumber = Math.floor(Math.random()*5)
    p.textContent = question[gameNumber]
}

let answerDiv = document.getElementById('answer')
function displayAnswer(){
    let answerLength= answer[gameNumber].length
    //console.log(answerLength)
    let answerDiv = document.getElementById('answer')

for(let i=0; i<answerLength; i++){
 
    let answerlist = document.createElement('li');
    answerlist.id = 'ansletter';
    answerlist.innerHTML = '_';
    answerDiv.appendChild(answerlist);

}


}
let hintresponseDiv= document.getElementById('hintresponse')
let hintp = document.createElement('p')
hintresponseDiv.appendChild(hintp)
function hintClick(){

//console.log(hintresponse[gameNumber])
//let hintp = document.createElement('p')
hintp.innerHTML = 'Your Hint -- '+ hintresponse[gameNumber]

}

let hintButton = document.getElementById('hint')
hintButton.addEventListener('click', hintClick)



