// Display modal for "entrejambe" section
const informationBtn = document.getElementById('more-information--btn');
const modal = document.getElementById('pratique--modal');
const closeModalBtn = document.getElementsByClassName('btnClose');

if (!informationBtn == false) {
   informationBtn.addEventListener('click', () => {
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