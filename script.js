
let alphabetsDiv = document.getElementById('alphabetbuttons') // Alphebet Buttons Div
let alphabetsUl = document.createElement('ul') // Ul  in the alphabetbuttons div to hold the li's of letters
let life = 5  

window.onload = function(){
    alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z']
    alphabetsUl.id = 'alphabet' // setting an id to th ul 
    alphabetsDiv.appendChild(alphabetsUl) 
    for(let i=0; i<alphabetsArray.length; i++){
 
        let list = document.createElement('li'); //the li's in alphabet UL
        list.id = 'letter'; // settthe id to the li's
        list.innerHTML = alphabetsArray[i].toUpperCase();
        alphabetsUl.appendChild(list);

    }
    selectQuestion()
    displayAnswer()

    let answerLength =  answer[gameNumber].length
    let answerArray =[]
    let remainingLetters = answerLength
    //Verifying userChoice with answer
    let updated = 0
   
    alphabetsUl.addEventListener('click', function(e){
    let answerli = document.getElementById('answer').querySelectorAll('li')
    let lifecountdown=document.getElementById('countdown')
    
    
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
            }
            else{
                   continue
            }         
        }
        if( updated === 0){
            life--
            lifecountdown.textContent = 'You have '+ life + ' lives remaining'
        }    
    // }
    // else{
        if(life ==0){
        console.log('All lives taken')
        }
        if(remainingLetters <= 0){
        console.log('Word Completed')
        }
    }

     })

   


}
let question =[' Name of a state in US','An NBA Team name','Name of an extinct animal']
let answer =[ 'ATLANTA','LALAKERS','KIWI']
let hintresponse =['First','Second','Third']
let gameNumber 

function selectQuestion(){
    let question =[' Name of a state in US','An NBA Team name','Name of an extinct animal']
    let questionDiv = document.getElementById('question')
    let p = document.createElement('p')
    questionDiv.appendChild(p)
    gameNumber = Math.floor(Math.random()*3)
    p.textContent = question[gameNumber]
}

function displayAnswer(){
    let answerLength= answer[gameNumber].length
    //console.log(answerLength)
    let answerDiv = document.getElementById('answer')

for(let i=0; i<answerLength; i++){
 
    let answerlist = document.createElement('li');
    answerlist.id = 'ansletter';
    answerlist.innerHTML = '_';
    //answerlist. ='center'
    answerDiv.appendChild(answerlist);

}


}

function hintClick(){
let hintresponseDiv= document.getElementById('hintresponse')
//console.log(hintresponse[gameNumber])

let p = document.createElement('p')
p.innerHTML = 'Your Hint -- '+ hintresponse[gameNumber]
hintresponseDiv.appendChild(p)
}

let hintButton = document.getElementById('hint')
hintButton.addEventListener('click', hintClick)



