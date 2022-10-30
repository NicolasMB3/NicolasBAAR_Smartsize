// Display modal for "entrejambe" section
const buttonEntrejambe = document.getElementById('modalEntrejambe');
const modal = document.getElementById('section--modal');
const closeModalBtn = document.getElementsByClassName('fa-xmark');

if (!buttonEntrejambe == false) {
   buttonEntrejambe.addEventListener('click', () => {
      modal.style.display = 'flex';
   });
}

for (let i = 0; i < closeModalBtn.length; i++) {
   closeModalBtn[i].addEventListener('click', () => {
      for (let i = 0; i < closeModalBtn.length; i++) {
         modal.style.display = 'none';
      }
   })
}