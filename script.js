const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');

noButton.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * window.innerWidth - 100);
  const randomY = Math.floor(Math.random() * window.innerHeight - 100);
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
  window.location.href = "good_choice.html"; // Replace with your desired page
});