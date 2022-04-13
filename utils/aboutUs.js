const itemsContent = document.querySelectorAll(`.item-content`);
const listItem = document.querySelectorAll(`.list-item`);

listItem.forEach((item, index) => {
  item.addEventListener(`click`, (e) => {
    listItem.forEach((item) => {
      item.style.color = `#fff`;
    });

    e.target.style.color = `#40d0d3`;
    itemsContent.forEach((content) => {
      if (!content.classList.contains(`d-none`)) {
        content.classList.add(`d-none`);
      }
    });

    itemsContent[index].classList.remove(`d-none`);
  });
});
