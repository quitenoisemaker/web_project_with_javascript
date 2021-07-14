const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'wizard', 'interface'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {

    /*here we turn the selectedWord to array(turning each letter to an element of array) using split('') then
    map through it . then check if the letter are included in the correctletters array if its included, it 
    should output the letter else it should return an empty string. then change the arrays to string using
    join('')

    */

    wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;

    //ends

    const innerWord = wordEl.innerText.replace(/\n/g, ''); //replacing the next line with empty 

    //if innerword is equal to the selectedWord
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display = 'flex'; // changing the popup style to display: flex
    }

    //end

}

displayWord()