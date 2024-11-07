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
let originalWordOrder = []; // To store the original order of words

// Function to create the game UI
function createGameUI() {
    wordsContainer.innerHTML = ''; // Clear previous words
    sentenceContainer.innerHTML = ''; // Clear previous sentence slots

    // Create words elements
    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('word');
        // Reverse the word
        wordElement.textContent = word.split('').reverse().join(''); 
        wordElement.setAttribute('id', `word-${index}`);
        wordElement.setAttribute('draggable', 'true');
        wordElement.addEventListener('dragstart', handleDragStart);
        wordElement.addEventListener('dragend', handleDragEnd);
        wordsContainer.appendChild(wordElement);
    });

    // Create sentence slots
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
    const correctWord = words[wordIndex];

    // Check if the dropped word is the correct word (reversed)
    if (draggedWord.textContent === correctWord.split('').reverse().join('')) {
        // Correct match
        event.target.appendChild(draggedWord);
    } else {
        // Incorrect match
        remarksDisplay.innerText = "Subukan ulit!";
    }
}

// Function to start a new game
function startGame() {
    score = 0;
    scoresDisplay.innerText = score;
    remarksDisplay.innerText = "";

    // Choose a random sentence
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    words = currentSentence.split(' ');

    // Store the original order of words
    originalWordOrder = [...words];

    // Shuffle the words randomly
    for (let i = originalWordOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [originalWordOrder[i], originalWordOrder[j]] = [originalWordOrder[j], originalWordOrder[i]];
    }

    createGameUI();
}

// Function to check the answer
function checkAnswer() {
    const sentenceSlots = document.querySelectorAll('.sentence-slot');
    let userSentence = "";

    sentenceSlots.forEach(slot => {
        if (slot.children.length > 0) {
            // Reverse the word before adding to the sentence
            userSentence += slot.children[0].textContent.split('').reverse().join('') + " "; 
        }
    });

    // Check if the user has arranged the words correctly
    if (userSentence.trim() === currentSentence.trim()) {
        // Correct answer
        remarksDisplay.innerText = "Napakahusay! Tama ang sagot mo!";
        score++;
        scoresDisplay.innerText = score;
    } else {
        // Incorrect answer
        remarksDisplay.innerText = "Hindi tama ang pagkakasunod-sunod ng mga salita. Subukan ulit!";
    }
}

// Start the game on page load
startGame();

// Event listener for "Play Again" button
playAgainButton.addEventListener('click', startGame);

// Event listener for "Pasa ang Sagot" button
checkAnswerButton.addEventListener('click', checkAnswer);
