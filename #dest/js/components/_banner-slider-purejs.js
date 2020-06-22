// document.addEventListener("DOMContentLoaded", function() {
//     const btn_next = document.querySelector('.control-btn-next');
//     const btn_prev = document.querySelector('.control-btn-prev');

//     btn_next.addEventListener('click', function() {
//         const current = document.querySelector('.banner-item.active');
//         const firstChild = document.querySelector('.banner-list').firstElementChild;
//         const lastChild = document.querySelector('.banner-list').lastElementChild;

//         current.classList.remove('active');

//         if (current == lastChild) {
//             firstChild.classList.add('active');
//         } else {
//             current.nextElementSibling.classList.add('active');  
//         }
//     })

//     btn_prev.addEventListener('click', function() {
//         const current = document.querySelector('.banner-item.active');
//         const firstChild = document.querySelector('.banner-list').firstElementChild;
//         const lastChild = document.querySelector('.banner-list').lastElementChild;

//         current.classList.remove('active');

//         if (current == firstChild) {
//             lastChild.classList.add('active');
//         } else {
//             current.previousElementSibling.classList.add('active');  
//         }
//     })
// });