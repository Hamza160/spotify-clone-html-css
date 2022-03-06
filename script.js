const btn = document.querySelector('.hamburger');
const nabvar = document.querySelector('#mobile-navbar');
btn.addEventListener('click', function(){
  btn.classList.toggle('open');
  nabvar.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
});