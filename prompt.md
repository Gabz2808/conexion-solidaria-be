# Instrucciones para subir Backend y Frontend a producción en Google Cloud

## Subir el Backend (NestJS con TypeORM y PostgreSQL)

### 1. Configura tu VM en Google Cloud

1. **Accede a Google Cloud Console**: Ve a [Google Cloud Console](https://console.cloud.google.com/).
2. **Crea una nueva VM**:

   - Ve a la sección "Compute Engine" > "Instancias de VM".
   - Haz clic en "Crear instancia".
   - Configura los detalles de la VM:
     - **Nombre**: Dale un nombre a tu instancia.
     - **Región/Zona**: Selecciona la región más cercana a tus usuarios.
     - **Tipo de máquina**: Selecciona un tipo de máquina adecuado (por ejemplo, `e2-medium` para aplicaciones pequeñas).
     - **Sistema operativo**: Usa una imagen basada en Linux, como Ubuntu 22.04 LTS.
   - Haz clic en "Crear".

3. **Accede a la VM**:
   - Una vez creada, haz clic en "SSH" para acceder a la terminal de la VM.

---

### 2. Instala Docker en la VM

1. Actualiza los paquetes del sistema:

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Instala Docker:

   ```bash
   sudo apt install -y docker.io
   ```

3. Verifica que Docker esté instalado correctamente:

   ```bash
   docker --version
   ```

4. (Opcional) Agrega tu usuario al grupo de Docker para evitar usar `sudo`:
   ```bash
   sudo usermod -aG docker $USER
   ```

---

### 3. Sube tu proyecto a la VM

1. **Sube tu código fuente**:

   - Si tu proyecto está en un repositorio de GitHub:
     ```bash
     git clone https://github.com/tu-usuario/tu-repositorio.git
     cd tu-repositorio
     ```
   - Si no está en GitHub, puedes usar `scp` para transferir los archivos desde tu máquina local:
     ```bash
     scp -r /ruta/a/tu/proyecto usuario@IP_DE_LA_VM:/ruta/destino
     ```

2. **Crea el archivo `.env`** (si es necesario):
   - Asegúrate de incluir las variables de entorno necesarias para tu aplicación.

---

### 4. Construye y ejecuta el contenedor Docker

1. **Construye la imagen Docker**:

   - Asegúrate de que el archivo `Dockerfile` esté en el directorio raíz del proyecto.
   - Ejecuta el siguiente comando para construir la imagen:
     ```bash
     docker build -t nombre-de-tu-app .
     ```

2. **Ejecuta el contenedor**:

   - Ejecuta el contenedor en modo desprendido (background):
     ```bash
     docker run -d -p 3000:3000 --name nombre-de-tu-app nombre-de-tu-app
     ```

3. **Verifica que el contenedor esté corriendo**:
   ```bash
   docker ps
   ```

---

### 5. Configura el firewall de Google Cloud

1. Ve a la sección "VPC network" > "Reglas de firewall".
2. Crea una nueva regla para permitir el tráfico en el puerto 3000:
   - **Nombre**: `permitir-puerto-3000`.
   - **Red**: `default`.
   - **Rango de IPs**: `0.0.0.0/0`.
   - **Protocolos y puertos**: Selecciona "TCP" y especifica el puerto `3000`.

---

### 6. Accede a tu aplicación

1. Obtén la dirección IP externa de tu VM desde la sección "Compute Engine".
2. Accede a tu aplicación en el navegador:
   ```
   http://IP_DE_LA_VM:3000
   ```

---

## Subir el Frontend (React con Tailwind CSS)

### 1. Construye tu aplicación React

1. **Asegúrate de que tu frontend esté listo para producción**:
   - Ve al directorio de tu proyecto React:
     ```bash
     cd /ruta/a/tu/proyecto-frontend
     ```
   - Instala las dependencias si no lo has hecho:
     ```bash
     npm install
     ```
   - Genera la versión de producción:
     ```bash
     npm run build
     ```
   - Esto generará una carpeta `build` con los archivos estáticos de tu aplicación.

---

### 2. Configura un servidor para servir el frontend

#### Opción 1: Usar Nginx

1. **Instala Nginx en tu VM**:

   ```bash
   sudo apt update
   sudo apt install -y nginx
   ```

2. **Copia los archivos de tu frontend a la VM**:

   - Usa `scp` para transferir la carpeta `build` generada:
     ```bash
     scp -r /ruta/a/tu/proyecto-frontend/build usuario@IP_DE_LA_VM:/ruta/destino/frontend
     ```

3. **Configura Nginx para servir tu frontend**:

   - Edita el archivo de configuración de Nginx:
     ```bash
     sudo nano /etc/nginx/sites-available/default
     ```
   - Reemplaza el contenido con lo siguiente:

     ```nginx
     server {
         listen 80;
         server_name _;

         root /ruta/destino/frontend;
         index index.html;

         location / {
             try_files $uri /index.html;
         }
     }
     ```

   - Guarda y cierra el archivo.

4. **Reinicia Nginx**:

   ```bash
   sudo systemctl restart nginx
   ```

5. **Accede a tu frontend**:
   - Usa la dirección IP de tu VM en el navegador:
     ```
     http://IP_DE_LA_VM
     ```

---

#### Opción 2: Usar un contenedor Docker

1. **Crea un archivo `Dockerfile` para tu frontend**:
   En el directorio de tu proyecto React, crea un archivo `Dockerfile` con el siguiente contenido:

   ```dockerfile
   # Usa una imagen base de Nginx
   FROM nginx:alpine

   # Copia los archivos de la carpeta build al directorio de Nginx
   COPY build /usr/share/nginx/html

   # Expone el puerto 80
   EXPOSE 80

   # Comando para iniciar Nginx
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Construye la imagen Docker**:

   - Ve al directorio de tu proyecto React y ejecuta:
     ```bash
     docker build -t nombre-de-tu-frontend .
     ```

3. **Ejecuta el contenedor**:

   - Ejecuta el contenedor en la VM:
     ```bash
     docker run -d -p 80:80 --name nombre-de-tu-frontend nombre-de-tu-frontend
     ```

4. **Accede a tu frontend**:
   - Usa la dirección IP de tu VM en el navegador:
     ```
     http://IP_DE_LA_VM
     ```

---

### 3. Configura el backend y frontend juntos

Si tu backend y frontend están en la misma VM, asegúrate de que no haya conflictos de puertos. Por ejemplo:

- El backend puede correr en el puerto `3000`.
- El frontend puede correr en el puerto `80` (usando Nginx o Docker).

---

### 4. Configura un dominio y HTTPS (Opcional)

1. **Apunta tu dominio a la IP de la VM**:

   - Configura un registro A en tu proveedor de dominios para apuntar a la IP de la VM.

2. **Configura HTTPS con Let's Encrypt**:
   - Si usas Nginx, instala Certbot:
     ```bash
     sudo apt install -y certbot python3-certbot-nginx
     ```
   - Obtén un certificado SSL gratuito:
     ```bash
     sudo certbot --nginx
     ```

---

¡Con estos pasos, tendrás tu aplicación backend y frontend corriendo en producción en Google Cloud!
