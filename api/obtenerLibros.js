const { getDb } = require("./_firestore");

module.exports = async (req, res) => {
  try {
    const db = getDb();
    const snapshot = await db.collection("libros").get();

    const libros = snapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(libros);
  } catch (error) {
    console.error("Error real obtenerLibros:", error);
    res.status(500).json({
      error: "Error al obtener libros",
      detalle: error.message,
    });
  }
};