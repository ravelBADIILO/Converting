//store the reference  ...box ... droppable
const draggableElement = document.querySelectorAll('.word');
const droppableElement = document.querySelectorAll('.sentence-slot');
let score = 0;

//DRAG START
draggableElement.forEach(element => {
  element.addEventListener('dragstart', (drgStart) => {
    drgStart.dataTransfer.setData('text', drgStart.target.id);
    drgStart.currentTarget.classList.add('draggableFormat');
  }); 
});

//DROP EVENT
droppableElement.forEach(element => {
  element.addEventListener('drop', drpEvt => {
    drpEvt.preventDefault();
    const droppedElementId = drpEvt.dataTransfer.getData('text'); 
    const draggableElement = document.getElementById(droppedElementId);

    // Check if the slot is already occupied
    if (drpEvt.target.children.length === 0) {
      drpEvt.target.appendChild(draggableElement); 
    } else {
      // Handle the case where the slot is already occupied (e.g., allow swapping)
      // You might want to remove the existing word and then append the new one
    }
  }); 

  //DRAGOVER
  element.addEventListener('dragover', (drgOverEvt) => {
    drgOverEvt.preventDefault();
  }); 
});

//DRAGEND
draggableElement.forEach(element => {
  element.addEventListener('dragend', drgendEvt => {
    drgendEvt.currentTarget.classList.remove('draggableFormat');
  });
});

// Check Answer Button
const checkAnswerButton = document.getElementById('checkAnswer');
const tryAgainButton = document.getElementById('tryAgain');
const remarksDisplay = document.getElementById('remarks');
const scoresDisplay = document.getElementById('scores');

checkAnswerButton.addEventListener('click', () => {
  const sentenceSlots = document.querySelectorAll('.sentence-slot');
  const correctSentence = "The quick brown fox jumps over the lazy dog.";
  let userSentence = "";

  sentenceSlots.forEach(slot => {
    if (slot.children.length > 0) {
      userSentence += slot.children[0].textContent + " ";
    }
  });

  if (userSentence.trim() === correctSentence.trim()) {
    remarksDisplay.innerText = "Correct!";
    score += 1;
    scoresDisplay.innerText = score;
  } else {
    remarksDisplay.innerText = "Incorrect!";
  }
});

// Try Again Button
tryAgainButton.addEventListener('click', () => {
  // Reset the game state (clear the slots, reset score, etc.)
  const sentenceSlots = document.querySelectorAll('.sentence-slot');
  sentenceSlots.forEach(slot => {
    slot.innerHTML = ''; // Clear the contents of each slot
  });
  score = 0;
  scoresDisplay.innerText = score;
  remarksDisplay.innerText = '';
});
