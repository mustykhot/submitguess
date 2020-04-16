
let random_integer = parseInt((Math.random()*100)+1);
let guessNumb = document.getElementById("slot");
let showGuess_array=[];
var count=1;

let numberOfGuess=0;

//colllect and give value to the program
function give(x){
    verify(parseInt(guessNumb.value));
}

//showGuess function

function showGuess(x){
    showGuess_array.push(x);
}
//show guesses
function displayGuess(x) {
    document.getElementById("gasa").innerHTML =  x ;

}


//show messages
function showNews(message){
    document.getElementById("ans").innerHTML= message;
}

// show remaining trials
function show_remain(rem){
    document.getElementById("rema").innerHTML = rem;
}

function reset(){
    guessNumb.value = '';
}

function verify(guess){
   
    if (isNaN(guess)){
        alert('Please enter a valid number');
        reset();
    } 
    else if (guess < 1) {
        alert('Please enter a number greater than 0!');
        reset();
    }
    else if (guess > 100){
        alert('Please enter a number less than 101!');
        reset();
    }

    else{
        //show the guessNumber
        showGuess(guess);
        //display guesses
        displayGuess(showGuess_array);

        //move on to check
        checkAns(guess);
        
    }
}
//check for answer
function checkAns(x){

    

            if (x>random_integer) {

                showNews("Too high, Use your brain");
                count++
                if (count==11) {
                    endGame();
                }
                else{
                    reset();

                }
                show_remain(11-count);
               
                
            }
            else if (x<random_integer) {

                showNews("Too Low, think");
                count++
                if (count==11) {
                    endGame();
                }
                else{
                    reset();


                }
                show_remain(11-count);
                
            } 

            else{
                showNews("Correct");

            }

}
    

//new game function
function newGame(){
    random_integer = parseInt((Math.random()*100)+1);
    showGuess_array = [];
    guessNumb.removeAttribute('disabled','');
    count=1;
    reset();
    showNews('');
    show_remain('');
    displayGuess('');

}
//gameover function
function endGame(){
    guessNumb.setAttribute('disabled', '');
    showNews("Game over, answer is " + random_integer);
}
