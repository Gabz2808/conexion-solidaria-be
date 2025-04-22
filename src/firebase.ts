import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';

dotenv.config();


const serviceAccount: ServiceAccount = require('../conexion-solidaria-8684b-firebase-adminsdk-fbsvc-95d358f039.json');


// Inicializar Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://conexion-solidaria-8684b.firebasestorage.app', // Nombre del bucket
});

// Exportar utilidades de Firebase
export const bucket = admin.storage().bucket();
export const db = getFirestore();