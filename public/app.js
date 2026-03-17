const ENDPOINTS = {
  obtenerLibros: "/api/obtenerLibros",
  buscarLibroPorId: "/api/buscarLibroPorId",
  buscarLibroPorIsbn: "/api/buscarLibroPorIsbn",
};

const resultado = document.getElementById("resultado");
const btnCargar = document.getElementById("btnCargar");
const btnBuscarId = document.getElementById("btnBuscarId");
const btnBuscarIsbn = document.getElementById("btnBuscarIsbn");

function mostrarMensaje(texto) {
  resultado.innerHTML = `<div class="mensaje">${texto}</div>`;
}

function renderizarTabla(datos) {
  if (!Array.isArray(datos) || datos.length === 0) {
    mostrarMensaje("No hay datos para mostrar.");
    return;
  }

  const columnas = Object.keys(datos[0]);
  const encabezados = columnas.map(col => `<th>${col}</th>`).join("");

  const filas = datos.map(fila => {
    const celdas = columnas.map(col => `<td>${fila[col] ?? ""}</td>`).join("");
    return `<tr>${celdas}</tr>`;
  }).join("");

  resultado.innerHTML = `
    <table>
      <thead>
        <tr>${encabezados}</tr>
      </thead>
      <tbody>
        ${filas}
      </tbody>
    </table>
  `;
}

btnCargar.addEventListener("click", async () => {
  try {
    mostrarMensaje("Cargando libros...");
    const respuesta = await fetch(ENDPOINTS.obtenerLibros);
    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.error || "No se pudieron cargar los libros");
    }

    renderizarTabla(data);
  } catch (error) {
    mostrarMensaje(`Error: ${error.message}`);
    console.error(error);
  }
});

btnBuscarId.addEventListener("click", async () => {
  try {
    const id = document.getElementById("inputId").value.trim();

    if (!id) {
      mostrarMensaje("Debes escribir un ID.");
      return;
    }

    mostrarMensaje("Buscando libro por ID...");
    const respuesta = await fetch(`${ENDPOINTS.buscarLibroPorId}?id=${encodeURIComponent(id)}`);
    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.error || "No se pudo buscar el libro");
    }

    renderizarTabla([data]);
  } catch (error) {
    mostrarMensaje(`Error: ${error.message}`);
    console.error(error);
  }
});

btnBuscarIsbn.addEventListener("click", async () => {
  try {
    const isbn = document.getElementById("inputIsbn").value.trim();

    if (!isbn) {
      mostrarMensaje("Debes escribir un ISBN.");
      return;
    }

    mostrarMensaje("Buscando libro por ISBN...");
    const respuesta = await fetch(`${ENDPOINTS.buscarLibroPorIsbn}?isbn=${encodeURIComponent(isbn)}`);
    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.error || "No se pudo buscar el libro");
    }

    renderizarTabla([data]);
  } catch (error) {
    mostrarMensaje(`Error: ${error.message}`);
    console.error(error);
  }
});