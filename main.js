// Modo oscuro/claro al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.add("light-mode");
  }
});

// Ajustar espacios por header y footer
function ajustarEspacios() {
  const footer = document.getElementById("main-footer");
  const header = document.querySelector("header nav");
  const main = document.querySelector("main");

  if (footer && header && main) {
    const alturaFooter = footer.offsetHeight;
    const alturaHeader = header.offsetHeight;
    main.style.paddingTop = alturaHeader + "px";
    main.style.paddingBottom = alturaFooter + "px";
  }
}

window.addEventListener("load", ajustarEspacios);
window.addEventListener("resize", ajustarEspacios);

// Cambiar modo
function setDarkMode() {
  document.documentElement.classList.add("dark-mode");
  document.documentElement.classList.remove("light-mode");
  localStorage.setItem("modo", "oscuro");
}

function setLightMode() {
  document.documentElement.classList.add("light-mode");
  document.documentElement.classList.remove("dark-mode");
  localStorage.setItem("modo", "claro");
}

// Validación de formulario en contacto.html
if (window.location.pathname.includes("contacto.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const asunto = document.getElementById("asunto");
        const mensaje = document.getElementById("mensaje");

        if (
          !nombre.value.trim() ||
          !email.value.trim() ||
          !asunto.value.trim() ||
          !mensaje.value.trim()
        ) {
          alert("Por favor, completá todos los campos antes de enviar el formulario.");
          return;
        }

        alert(
          "Gracias por su contacto, " +
            nombre.value +
            ". En breve le estaré respondiendo."
        );
        this.reset();
      });
    }
  });
}
