    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
       //  hier komt jouw code
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
     
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
     
    function makeThisSentence(){
        let indexOnderWerp = randomizer(arrayLengthOnderwerp);
        let indexWerkwoord = randomizer(arrayLengthWerkwoord);
        let indexRestwoord = randomizer(arrayLengthRestwoord);
        
        let woord1 = onderwerp[indexOnderWerp];
        let woord2 = werkwoord[indexWerkwoord];
        let woord3 = restwoord[indexRestwoord];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let indexPlaatjes = randomizer(arrayLengthPlaatjes);
        myImage.src = plaatjes[indexPlaatjes]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    const onderwerp = ["My mom", "This program", "Star", "This horse"];
    const werkwoord = ["is", "wants", "has", "makes", "gets"];
    const restwoord = ["food", "games", "a horse", "homework", "a car"];
    const plaatjes = ["img/horse.jpg", "img/snacks.jpg", "img/cube.png", "img/code.jpg"]
    let arrayLengthOnderwerp = onderwerp.length;
    let arrayLengthWerkwoord = werkwoord.length;
    let arrayLengthRestwoord = restwoord.length;
    let arrayLengthPlaatjes = plaatjes.length;
