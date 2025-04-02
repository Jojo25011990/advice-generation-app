'use strict';
const btn = document.querySelector('button');

btn.addEventListener('click', getAdvice);

getAdvice();

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      // *** Data Advice JSON ***
      const advice = data.slip.advice;
      const adviceID = data.slip.id;

      // *** Paragraph + Span ( In advice__title ) ***
      const adviceText = document.querySelector('.advice__text');
      const adviceTitleId = document.querySelector('.advice__title-id');

      adviceText.innerText = advice;
      adviceTitleId.innerText = '#' + adviceID;
    })
    .catch(error => console.log('Bad error 😂 :', error));
}
