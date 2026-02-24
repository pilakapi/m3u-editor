const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

// ===============================
// FUNCION PARA VERIFICAR STREAM
// ===============================
async function checkStream(url) {
  try {
    const response = await axios.get(url, {
      timeout: 8000,
      responseType: "stream",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    return response.status === 200;
  } catch {
    return false;
  }
}

// ===============================
// API ESCANEAR
// ===============================
app.post("/scan", async (req, res) => {
  const channels = req.body.channels;

  const results = await Promise.all(
    channels.map(async (channel) => {
      const working = await checkStream(channel.url);
 });

app.post("/load", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: "No se pudo cargar la lista" });
  }
});


app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);

});
