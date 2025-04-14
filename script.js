document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-btn");
  const resultadoSection = document.getElementById("resultado");
  const resultadoTitulo = document.getElementById("resultado-titulo");
  const resultadoDescripcion = document.getElementById("resultado-descripcion");
  const resultadoImg = document.getElementById("resultado-img");
  const reiniciarBtn = document.getElementById("reiniciar-btn");

  const inicioSection = document.getElementById("inicio");

  // Selector de idioma
  const esBtn = document.getElementById("es-btn");
  const enBtn = document.getElementById("en-btn");

  const setLanguage = (lang) => {
    document.querySelectorAll("[data-es]").forEach((el) => {
      el.textContent = lang === "es" ? el.dataset.es : el.dataset.en;
    });
  };

  esBtn.addEventListener("click", () => {
    setLanguage("es");
    esBtn.classList.add("active");
    enBtn.classList.remove("active");
  });

  enBtn.addEventListener("click", () => {
    setLanguage("en");
    enBtn.classList.add("active");
    esBtn.classList.remove("active");
  });

  // Evento al hacer clic en "Iniciar"
  startBtn.addEventListener("click", () => {
    inicioSection.classList.add("hidden");
    resultadoSection.classList.remove("hidden");

    // Resultado provisional
    resultadoTitulo.textContent = "Verano Claro";
    resultadoDescripcion.textContent =
      "Esta estación corresponde a tonos suaves y claros. Te recomendamos colores pastel, rosa suave, lavanda, azul cielo y gris perla.";
    resultadoImg.src = "images/verano-claro.jpg";
  });

  // Evento al hacer clic en "Reiniciar"
  reiniciarBtn.addEventListener("click", () => {
    resultadoSection.classList.add("hidden");
    inicioSection.classList.remove("hidden");
  });

  // Idioma por defecto
  setLanguage("es");
});
