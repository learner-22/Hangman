window.onload = function(){

let alphabetsDiv = document.getElementById('alphabetbuttons') 
let alphabetsUl = document.createElement('ul')
alphabetsArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']
alphabetsUl.id = 'alphabet'
alphabetsDiv.appendChild(alphabetsUl)
for(let i=0; i<alphabetsArray.length; i++){
 
    let list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alphabetsArray[i].toUpperCase();
    alphabetsUl.appendChild(list);

}
selectQuestion()
displayAnswer()

alphabetsUl.addEventListener('click', function(e){
    console.log(e.target.textContent)
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
    answerlist.id = 'letter';
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



