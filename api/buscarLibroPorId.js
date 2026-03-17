const { getDb } = require("./_firestore");

module.exports = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        error: "Debes enviar el parámetro id",
      });
    }

    const db = getDb();
    const doc = await db.collection("libros").doc(String(id)).get();

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
    console.error("Error real buscarLibroPorId:", error);
    res.status(500).json({
      error: "Error al buscar por id",
      detalle: error.message,
    });
  }
};