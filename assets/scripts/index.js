// Display modal for "entrejambe" section
const buttonEntrejambe = document.getElementsByClassName('modalEntrejambe');
const validBtn = document.getElementsByClassName('vtmn-btn_size--stretched')
const modal = document.getElementById('section--modal');
const closeModalBtn = document.getElementsByClassName('btnClose');

[...validBtn].forEach(element => {
   element.addEventListener('click', () => {
      modal.style.display = 'none';
   })
});

[...buttonEntrejambe].forEach(element => {
   if (!element == false) {
      element.addEventListener('click', () => {
         modal.style.display = 'flex';
      });
   }
});

for (let i = 0; i < closeModalBtn.length; i++) {
   closeModalBtn[i].addEventListener('click', () => {
      for (let i = 0; i < closeModalBtn.length; i++) {
         modal.style.display = 'none';
      }
   })
}