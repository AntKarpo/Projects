// add max count
const questionTextarea = document.getElementById("addQuestion");
const answerTextarea = document.getElementById("addAnswer");

function updateCharacterCount(textarea, counter) {
const maxCharacters = parseInt(textarea.getAttribute("maxlength"));
const remainingCharacters = maxCharacters - textarea.value.length;
counter.innerText = `Characters left: ${remainingCharacters}`;
}
questionTextarea.addEventListener("input", () => {
updateCharacterCount(questionTextarea, document.getElementById("questionCounter"));

});
answerTextarea.addEventListener("input", () => {
updateCharacterCount(answerTextarea, document.getElementById("answerCounter"));

});

// darkmode
function onSlide() {
  const element = document.body;
  element.classList.toggle("dark");
}

// bookmark toggle
function toggleBookmark(bm) {
  bm.classList.toggle("question-card__icon--active");
  const isBookmarked = bm.classList.contains("question-card__icon--active");
  bm.src = isBookmarked ? "./assets/bookmark_filled.png" : "./assets/bookmark.png";
}
// answer display
  function answer(button) {
    const answerIsOpen = button.nextElementSibling;
    
    if (answerIsOpen.style.display === "none"|| !answerIsOpen.style.display) {
      answerIsOpen.style.display = "block"; 
    } else {
      answerIsOpen.style.display = "none"; 
    }
  }
  
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-js="form"]');
  const newQuestionContainer = document.getElementById('add');
  const questionTextarea = document.getElementById('addQuestion');
  const answerTextarea = document.getElementById('addAnswer');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const question = event.target.elements.question.value;
    const answer = event.target.elements.answer.value;
    const hashtags = event.target.elements.hashtags.value;

    const card = document.createElement('section');
    card.classList.add('question-card');

    const questionElement = document.createElement('h2');
    questionElement.classList.add('question-card__title');
    questionElement.textContent = question;

    const answerElement = document.createElement('button');
    answerElement.classList.add('question-card__button');
    answerElement.textContent ="show answer";
    answerElement.addEventListener('click', function () {
      answer(this);
    });
    
    const pElement = document.createElement('p');
    pElement.classList.add('question-card__answer');
    pElement.textContent =answer;

    const hashtagsElement = document.createElement('div');
    hashtagsElement.classList.add('question-card__tag');
    hashtagsElement.textContent = hashtags;

    const imgElement = document.createElement('img');
    imgElement.classList.add('question-card__icon');
    imgElement.src = './assets/bookmark.png';
    imgElement.alt = 'bookmark'; 
    imgElement.addEventListener('click', function() {
        toggleBookmark(this);
    });
    answerElement.append(pElement);
    card.append(imgElement);
    card.append(questionElement);
    card.append(answerElement);
    card.append(hashtagsElement);
    document.body.append(card);

    newQuestionContainer.insertAdjacentElement('afterend', card);

    // Reset textareas and counters
    event.target.reset();
    questionTextarea.focus();
    updateCharacterCount(questionTextarea, document.getElementById('questionCounter'));
    updateCharacterCount(answerTextarea, document.getElementById('answerCounter'));
  });

});



 