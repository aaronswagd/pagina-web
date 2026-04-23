//(zoom, modal, etc)
console.log("galeria cargada");

document.querySelectorAll(".transition-link").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const url = this.href;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = url;
    }, 500);
  });
});

window.addEventListener("pageshow", () => {
  document.body.classList.add("fade-in");
});
