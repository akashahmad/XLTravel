////////// LISTING SECTION FUNCTIONALITY
const triangleSign = document.querySelectorAll(
  `.listing-container__item-triangle`
);

triangleSign.forEach((sign) => {
  sign.addEventListener(`click`, showAdjacentContent);
});

function showAdjacentContent() {
  triangleSign.forEach((sign) => {
    if (!sign.nextElementSibling.children[1].classList.contains(`invisible`)) {
      sign.nextElementSibling.children[1].classList.add(`invisible`);
      sign.style.transform = `rotate(45deg) scale(1)`;
      sign.style.backgroundColor = `#40d0d3`;
      sign.nextElementSibling.children[0].style.color = `#fff`;
      sign.nextElementSibling.children[0].style.fontWeight = `500`;
    }
  });

  this.nextElementSibling.children[1].classList.remove(`invisible`);
  this.style.transform = `rotate(0) scale(1.3)`;
  this.style.backgroundColor = `#fec657`;
  this.nextElementSibling.children[0].style.color = `#fec657`;
  this.nextElementSibling.children[0].style.fontWeight = `600`;
}

/////////////// ABOUT MORE SECTION FUNCTIONALITY ////////////
// const readMoreBtn = document.querySelectorAll(`.read-more-btn`);
// const overflowParas = document.querySelectorAll(`.more-container__text--paras`);
// const paras = [];

// overflowParas.forEach((para) => {
//   paras.push(para.innerHTML);

//   if (para.innerHTML.length >= 900) {
//     para.innerHTML = para.innerHTML.substring(0, 900) + `...`;
//     para.nextElementSibling.classList.remove(`invisible`);
//   }
// });

// console.log(paras);

// readMoreBtn.forEach((btn, index) => {
//   btn.addEventListener(`click`, () => {
//     if (btn.textContent.trim() === `Read More`) {
//       btn.previousElementSibling.innerHTML = paras[index];
//       btn.innerText = `Read Less`;
//     } else {
//       btn.previousElementSibling.innerHTML =
//         paras[index].substring(0, 900) + `...`;
//       btn.innerText = `Read More`;
//     }
//   });
// });

/// MARKETING PARA READ MORE FUNCTIONALITY
// const readMore = document.getElementById(`read-more`);

// readMore.addEventListener(`click`, () => {
//   if (readMore.textContent.trim() === `Read More`) {
//     readMore.previousElementSibling.style.display = `block`;
//     readMore.textContent = `Read Less`;
//   } else {
//     readMore.previousElementSibling.style.display = `none`;
//     readMore.textContent = `Read More`;
//   }
// });

window.addEventListener(`scroll`, () => {
  const text1 = document.querySelector(`#laptop-text1 span`);
  const text2 = document.querySelector(`#laptop-text2 span`);
  if (elementInViewport(text1)) {
    text1.style.animation = `typing 2s linear .3s forwards`;
    text2.style.animation = `typing 2s linear 2s forwards`;
  } else {
    text1.style.animation = `none`;
    text2.style.animation = `none`;
  }
});

/* FUNCTION RETURNS TRUE WHEN THE ELEMENT IS VISIBLE ON VIEWPORT AND VICE VERSA */
function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}
