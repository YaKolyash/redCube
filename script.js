const box = document.querySelector('.box');
const btnList = document.querySelector('.btn-list');
const transition = 'left 1s ease-in-out';

box.style.transition = transition;

btnList.addEventListener('click', ({target}) => {
  const windowWidth = window.innerWidth;

  if(target.value === 'left'){
    box.style.left = '0';
  } 
  
  if(target.value === 'right') {
    box.style.left = (windowWidth - box.offsetWidth) + 'px';
  }
});
