const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

console.log("Iniciando importación...");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

const COLECCION = "libros";
const ARCHIVO_CSV = path.join(__dirname, "..", "dataset", "libros.csv");
const CAMPOS_NUMERICOS = ["id", "año", "stock"];

function convertirValor(campo, valor) {
  if (valor === undefined || valor === null) return null;

  const limpio = String(valor).trim();
  if (limpio === "") return null;

  if (CAMPOS_NUMERICOS.includes(campo)) {
    const numero = Number(limpio);
    return Number.isNaN(numero) ? limpio : numero;
  }

  return limpio;
}

function normalizarFila(row) {
  const objeto = {};

  for (const [campo, valor] of Object.entries(row)) {
    const campoLimpio = campo.trim();
    objeto[campoLimpio] = convertirValor(campoLimpio, valor);
  }

  if (!objeto.id) {
    throw new Error("Cada fila debe tener un id.");
  }

  if (!objeto.isbn) {
    throw new Error("Cada fila debe tener un isbn.");
  }

  return objeto;
}

async function importarDatos() {
  const filas = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(ARCHIVO_CSV)
      .pipe(csv())
      .on("data", (row) => {
        try {
          filas.push(normalizarFila(row));
        } catch (error) {
          reject(error);
        }
      })
      .on("end", async () => {
        try {
          console.log(`Filas leídas: ${filas.length}`);

          for (const fila of filas) {
            const docId = String(fila.id);
            await db.collection(COLECCION).doc(docId).set(fila);
            console.log(`Libro ${docId} cargado correctamente`);
          }

          console.log(`Importación completada. Total libros: ${filas.length}`);
          resolve();
        } catch (error) {
          reject(error);
        }
      })
      .on("error", reject);
  });
}

importarDatos()
  .then(() => {
    console.log("Proceso finalizado.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error al importar:", error);
    process.exit(1);
  });