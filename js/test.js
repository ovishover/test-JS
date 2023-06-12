// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   currentActiveBtn?.classList.remove('tags__btn--active');
//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = new Set();
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const btn = e.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('tags__btn--active');

//   if (isActive) {
//     selectedTag.delete(tag);
//   } else {
//     selectedTag.add(tag);
//   }
//   btn.classList.toggle('tags__btn--active');
//   console.log(selectedTag);
// }


let payablesAray = [
    {
        company: "DOW",
        payables: 0,
        // invoiceDate: 20.05.2023,
        // paymentDate: 20.06.2023
    }
]
console.log(payablesAray[0]);