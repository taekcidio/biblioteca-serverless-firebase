const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

function obtenerVariable(nombre) {
  const valor = process.env[nombre];

  if (!valor) {
    throw new Error(`Falta la variable de entorno: ${nombre}`);
  }

  return valor;
}

function getDb() {
  if (!getApps().length) {
    const projectId = obtenerVariable("FIREBASE_PROJECT_ID");
    const clientEmail = obtenerVariable("FIREBASE_CLIENT_EMAIL");
    const privateKey = obtenerVariable("FIREBASE_PRIVATE_KEY").replace(/\\n/g, "\n");

    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  return getFirestore();
}

module.exports = { getDb };