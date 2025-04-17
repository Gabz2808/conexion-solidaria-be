const admin = require('firebase-admin')
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const express = require('express');
const multer = require('multer');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

const serviceAccount = require('../conexion-solidaria-8684b-firebase-adminsdk-fbsvc-6108339c68.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'conexion-solidaria-8684b.firebasestorage.app',
});

const db = getFirestore();
const bucket = admin.storage().bucket();

module.exports = {
db,
};

// Configurar CORS para permitir solicitudes desde cualquier origen
const cors = require('cors');

// Usar cors con opciones específicas
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// También manejar preflight OPTIONS manualmente por si acaso
app.options('/upload', cors());

  
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      console.log('No se recibió ningún archivo.');
        return res.status(400).send('No se proporcionó ningún archivo.');
      }
      console.log('Archivo recibido:', req.file.originalname);

      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      blobStream.on('error', (err) => {
        console.error('Error al subir a Firebase Storage:', err);
        res.status(500).send(err.message);
      });
    
      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        console.log('Subida exitosa:', publicUrl);
        res.status(200).send({ message: 'Imagen subida exitosamente', url: publicUrl });
      });
    
      blobStream.end(req.file.buffer);
    });
    

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

