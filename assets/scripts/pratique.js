// Display modal for "entrejambe" section
const informationBtn = document.getElementsByClassName('more-information--btn');
const modal = document.getElementById('pratique--modal');
const closeModalBtn = document.getElementsByClassName('btnClose');
const validBtnPrat = document.getElementsByClassName('vtmn-btn_size--stretched');

[...validBtnPrat].forEach(element => {
   element.addEventListener('click', () => {
      modal.style.display = 'none';
   })
});

[...informationBtn].forEach(element => {
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

// Display cards with select value
const getCards = document.getElementsByClassName('card--container');
const selectVelo = document.getElementById('velo');
const confortCard = document.getElementById('confort');
const perfCard = document.getElementById('perf');

[...getCards].forEach(element => {
   element.style.display = 'none';
});

console.log(selectVelo)

selectVelo.addEventListener("change", () => {
   if(selectVelo.value == 'chemin') {
      confortCard.style.display = 'block';
      perfCard.style.display = 'none';
   } else {
      confortCard.style.display = 'none';
      perfCard.style.display = 'block';
   }
});