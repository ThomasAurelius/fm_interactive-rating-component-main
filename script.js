const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingNumber = document.querySelector('.rating-number');


const active = 'active';
let rating;

ratingButtons.forEach(button => {
   button.addEventListener('click', (e) => {
      const clickedRating = e.target 
      ratingButtons.forEach(button => {
         button.classList.remove(active);
      });
      clickedRating.classList.add(active);
      rating = clickedRating.innerText
   });
});


submitButton.addEventListener('click', (e) => {
   e.preventDefault();
   if (!rating) {
      alert('Please select a rating');
   } else {
   ratingCard.classList.add('hidden');
   thankYouCard.classList.remove('hidden');
   ratingNumber.innerText = rating;
   }
})