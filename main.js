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

        if (!nombre.value.trim()) {
          alert("Por favor, completá el campo: Nombre");
          nombre.focus();
          return;
        }

        if (!email.value.trim()) {
          alert("Por favor, completá el campo: Email");
          email.focus();
          return;
        }

        if (!asunto.value.trim()) {
          alert("Por favor, completá el campo: Asunto");
          asunto.focus();
          return;
        }

        if (!mensaje.value.trim()) {
          alert("Por favor, completá el campo: Mensaje");
          mensaje.focus();
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
