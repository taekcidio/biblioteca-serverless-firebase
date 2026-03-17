const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const cors = require("cors")({ origin: true });

initializeApp();
const db = getFirestore();

const COLECCION = "libros";

exports.obtenerLibros = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await db.collection(COLECCION).get();

      const libros = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));

      res.status(200).json(libros);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener libros",
        detalle: error.message,
      });
    }
  });
});

exports.buscarLibroPorId = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({
          error: "Debes enviar el parámetro id",
        });
      }

      const doc = await db.collection(COLECCION).doc(String(id)).get();

      if (!doc.exists) {
        return res.status(404).json({
          error: "No se encontró el libro",
        });
      }

      res.status(200).json({
        docId: doc.id,
        ...doc.data(),
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al buscar por id",
        detalle: error.message,
      });
    }
  });
});

exports.buscarLibroPorIsbn = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { isbn } = req.query;

      if (!isbn) {
        return res.status(400).json({
          error: "Debes enviar el parámetro isbn",
        });
      }

      const snapshot = await db
        .collection(COLECCION)
        .where("isbn", "==", isbn)
        .limit(1)
        .get();

      if (snapshot.empty) {
        return res.status(404).json({
          error: "No se encontró el libro",
        });
      }

      const doc = snapshot.docs[0];

      res.status(200).json({
        docId: doc.id,
        ...doc.data(),
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al buscar por isbn",
        detalle: error.message,
      });
    }
  });
});