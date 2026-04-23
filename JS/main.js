// Esperar a que cargue todo
document.addEventListener("DOMContentLoaded", () => {

  // Popup después de 6 segundos
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if(popup){
      popup.style.display = "block";
    }
  }, 6000);

});

// Cerrar popup
function closePopup(){
  document.getElementById("popup").style.display = "none";
}

// Animaciones al hacer scroll
const elements = document.querySelectorAll(".card, .work");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});

// El botón detecte el dispositivo y abra lo mejor automáticamente en correo electrónico
function openEmail(e){
  e.preventDefault();

  const email = "makne.info@gmail.com";
  const subject = "Quiero cotizar";
  const body = "Hola, me interesa tu trabajo";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if(isMobile){
    // Móvil → app de correo
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // Desktop → Gmail web
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
  }
}

// Abrir galería de fotografía
function openGallery(){
  const section = document.getElementById("fotografia");

  section.classList.remove("hidden");

  section.scrollIntoView({
    behavior: "smooth"
  });
}
