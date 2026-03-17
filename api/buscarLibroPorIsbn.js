const { getDb } = require("./_firestore");

module.exports = async (req, res) => {
  try {
    const { isbn } = req.query;

    if (!isbn) {
      return res.status(400).json({
        error: "Debes enviar el parámetro isbn",
      });
    }

    const db = getDb();
    const snapshot = await db
      .collection("libros")
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
    console.error("Error real buscarLibroPorIsbn:", error);
    res.status(500).json({
      error: "Error al buscar por isbn",
      detalle: error.message,
    });
  }
};