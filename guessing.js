function Game() {
    var start = prompt(`Start program: 1.Yes 2.No`)
    while (start == 1 ) {
      
    alert("Welcome To The Guessing Game");
    var randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    var usernum = prompt("Enter your number");

    if (usernum == randomNumber) {
        alert('You guessed correctly');
    } else if(usernum < randomNumber){
       alert("you guessed wrong(lower than the correct number)") 
    } else if(usernum > randomNumber){
        alert("you guessed wrong(higher than the correct number)") }; 
  
    
    var proceed = prompt('Would you like to continue: 1.yes 2.no') 
    
    if (proceed == 1) {
        start = 1    
    } else if(proceed == 2){ start = 2
        }
    }
}
    

  
  Game()
 
// if(usernum == randomNumber) {
//             alert('You guessed right')
//     } else {
//             alert('you guessed wrong')
//         }; 

