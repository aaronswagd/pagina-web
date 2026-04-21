// Mostrar popup después de 6 segundos
const elements = document.querySelectorAll(\".card, .work\");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = \"translateY(0)\";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = \"translateY(40px)\";
  observer.observe(el);
});
setTimeout(() => {
  document.getElementById(\"popup\").style.display = \"block\";
}, 6000);

// Cerrar popup
function closePopup(){
  document.getElementById(\"popup\").style.display = \"none\";
}
