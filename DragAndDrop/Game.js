const wordsContainer = document.getElementById('wordsContainer');
const sentenceContainer = document.getElementById('sentenceContainer');
const remarksDisplay = document.getElementById('remarks');
const scoresDisplay = document.getElementById('scores');
const playAgainButton = document.getElementById('playAgainButton');
const checkAnswerButton = document.getElementById('checkAnswerButton');
let score = 0;

// Array of sentences to randomize
const sentences = [
    "Ang aso ay tumalon sa ibabaw ng bakod.",
    "Ang mabilis na kuneho ay tumakbo sa kagubatan.",
    "Ang matamis na prutas ay nakasabit sa puno.",
    "Ang malaking elepante ay kumakain ng damo.",
    "Ang maliit na ibon ay kumakanta sa sanga."
];

let currentSentence = "";
let words = [];
let shuffledWords = []; // Array to store the shuffled word order

// Function to create the game UI
function createGameUI() {
    wordsContainer.innerHTML = ''; // Linisin ang nakaraang mga salita
    sentenceContainer.innerHTML = ''; // Linisin ang nakaraang mga puwang ng pangungusap

    // Gumawa ng mga elemento ng salita
    shuffledWords.forEach((word, index) => { 
        const wordElement = document.createElement('div');
        wordElement.classList.add('word');
        wordElement.textContent = word;
        wordElement.setAttribute('id', `word-${index}`); // Panatilihin ang ID batay sa orihinal na index
        wordElement.setAttribute('draggable', 'true');
        wordElement.addEventListener('dragstart', handleDragStart);
        wordElement.addEventListener('dragend', handleDragEnd);
        wordsContainer.appendChild(wordElement);
    });

    // Gumawa ng mga puwang ng pangungusap
    currentSentence.split(' ').forEach((_, index) => {
        const slotElement = document.createElement('div');
        slotElement.classList.add('sentence-slot');
        slotElement.setAttribute('data-word-index', index);
        slotElement.addEventListener('dragover', handleDragOver);
        slotElement.addEventListener('drop', handleDrop);
        sentenceContainer.appendChild(slotElement);
    });
}

// Function to handle drag start
function handleDragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
    event.target.classList.add('draggableFormat');
}

// Function to handle drag end
function handleDragEnd(event) {
    event.target.classList.remove('draggableFormat');
}

// Function to handle drag over
function handleDragOver(event) {
    event.preventDefault();
}

// Function to handle drop
function handleDrop(event) {
    event.preventDefault();
    const draggedWordId = event.dataTransfer.getData('text');
    const draggedWord = document.getElementById(draggedWordId);
    const wordIndex = parseInt(event.target.dataset.wordIndex);

    // Kunin ang orihinal na salita batay sa wordIndex
    const originalWord = words[wordIndex]; 

    // Suriin kung ang puwang ay may laman na
    if (event.target.children.length === 0) {
        event.target.appendChild(draggedWord); 
    } else {
        // Pangasiwaan ang kaso kung ang puwang ay may laman na (halimbawa, payagan ang pagpapalit)
        // Maaari mong tanggalin ang umiiral na salita at pagkatapos ay i-append ang bago
    }

    // Suriin kung tama ang sagot
    if (draggedWord.textContent === originalWord) {
        //console.log('Right');
        score += 1;
        document.getElementById('remarks').innerText = "Tama!";
        document.getElementById('scores').innerText = score;
    } else {
        //console.log('Wrong');
        document.getElementById('remarks').innerText = "Mali!";
    } //end of if else

}

// Function to start a new game
function startGame() {
    score = 0;
    scoresDisplay.innerText = score;
    remarksDisplay.innerText = "";

    // Pumili ng random na pangungusap
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    words = currentSentence.split(' ');

    // Shuffle the words randomly
    shuffledWords = [...words]; // Kopyahin ang array ng mga salita
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }

    createGameUI();
}

// Function to check the answer
function checkAnswer() {
    const sentenceSlots = document.querySelectorAll('.sentence-slot');
    let userSentence = "";

    sentenceSlots.forEach(slot => {
        if (slot.children.length > 0) {
            userSentence += slot.children[0].textContent + " ";
        }
    });

    // Suriin kung tama ang pagkakasunod-sunod ng mga salita
    if (userSentence.trim() === currentSentence.trim()) {
        // Tama ang sagot
        remarksDisplay.innerText = "Napakahusay! Tama ang sagot mo!";
        score++;
        scoresDisplay.innerText = score;
    } else {
        // Mali ang sagot
        remarksDisplay.innerText = "Hindi tama ang pagkakasunod-sunod ng mga salita. Subukan ulit!";
    }
}

// Simulan ang laro kapag na-load ang page
startGame();

// Event listener para sa "Play Again" button
playAgainButton.addEventListener('click', startGame);

// Event listener para sa "Pasa ang Sagot" button
checkAnswerButton.addEventListener('click', checkAnswer);
