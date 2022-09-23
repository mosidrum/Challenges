const form = document.querySelector('.right form');
const input = document.querySelectorAll('.right form input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
      if(!input.value){
        input.parentElement.classList.add('error');
      }else{
        input.parentElement.classList.remove('error');
      }
    });
});