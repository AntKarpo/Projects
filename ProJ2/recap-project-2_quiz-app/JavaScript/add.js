
  const section = document.createElement("section");
  document.body.append(section);
  section.classList.add("question-card");



const productContainer = document.querySelector("");

const productHTML = `
<section class="question-card">
<img
  class="question-card__icon"
  onclick="toggleBookmark(this)"
  src="./assets/bookmark.png"
  alt="bookmark"
/>
<h2 class="question-card__title">
  What property flips the axes of flexbox
</h2>
<button class="question-card__button" type="button" onclick="answer(this)">show answer</button>
<p class="question-card__answer">flex-direction</p>
<div class="question-card__tags">
  <div class="question-card__tag">#html</div>
  <div class="question-card__tag">#css</div>
  <div class="question-card__tag">#flexbox</div>
</div>
</section>
<section class="question-card">
<img
  class="question-card__icon question-card__icon--active"
  src="./assets/bookmark_filled.png"
  onclick="toggleBookmark(this)"
  alt="bookmark filled"
/>
`;

productContainer.innerHTML += productHTML;

const buyButton = productContainer.querySelector(".product__buy-button");
buyButton.addEventListener("click", () => {
  console.log(`You clicked the buy button for ${name}. Price: ${price}`);
});