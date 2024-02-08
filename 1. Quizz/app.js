const form = document.querySelector('.form-quizz');
let arrayResults = [];
const responses = ['c','a','b','a','c']
const emojis = ["✅", "✨", "👀", "😭", "👎"];
const titreResults = document.querySelector('.results h2');
const noteResults = document.querySelector('.note');
const helpResults = document.querySelector('.help');
const allQuestions = document.querySelectorAll('.question-block');
let verifAray = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for( i=1; i<6; i++){
        arrayResults.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    verifFunc(arrayResults)
    arrayResults= [];
})

function verifFunc(arrResults){
    for(let a = 0; a < 5; a++){

        if(arrResults[a] === responses[a]){
            verifAray.push(true)
        }else{
            verifAray.push(false)
        }
            
    }
    console.log(verifAray);
    displayResults(verifAray);
    colorsFunction(verifAray);
    verifAray = [];
   
}

function displayResults(tabCheck){
    const nbErrors = tabCheck.filter(el => el !== true).length;
    console.log(nbErrors);

    switch(nbErrors) {
        case 0:
            titreResults.innerText = " ✅ Bravo, c'est un sans fautes ! ✅ ";
            helpResults.innerText ='';
            noteResults.innerText = '5/5';
        break;
        case 1:
            titreResults.innerText = `${emojis[1]} Vous y êtes presque ! ${emojis[1]}`;
            helpResults.innerText =
                "Retentez une autre réponse dans la case rouge, puis re-validez !";
            noteResults.innerText = "4/5";
            break;
        case 2:
            titreResults.innerText = `${emojis[1]} Encore un effort ... ${emojis[2]}`;
            helpResults.innerText =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResults.innerText = "3/5";
            break;
        case 3:
            titreResults.innerText = `${emojis[2]} Il reste quelques erreurs. ${emojis[3]}`;
            helpResults.innerText =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResults.innerText = "2/5";
            break;
        case 4:
            titreResults.innerText = `${emojis[3]} Peux mieux faire ! ${emojis[3]}`;
            helpResults.innerText =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResults.innerText = "1/5";
            break;
        case 5:
            titreResults.innerText = `${emojis[4]} Peux mieux faire ! ${emojis[4]}`;
            helpResults.innerText =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            noteResults.innerText = "0/5";
            break;

        default:
            "Wops, cas inattendu.";
            break;
    }
}

function colorsFunction(tabValBool){

    for(let j = 0; j < tabValBool.length; j++){
        
        if(tabValBool[j] === true){
                allQuestions[j].style.background = "lightgreen"
        } else {
                allQuestions[j].style.background = '#ffb8b8';
                allQuestions[j].classList.add('echec');

                setTimeout(() => {
                    allQuestions[j].classList.remove('echec');
                }, 500)
        }
    }
}

allQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})