# 📦 Jaol Systems - Backend API + Frontend SPA

Este proyecto es una aplicación completa para gestión de inventario, compuesta por una API REST (backend) y una interfaz de usuario (frontend) desarrollada en React. Utiliza autenticación, envío de correos, y almacenamiento en MongoDB.

---

## 🚀 Requisitos del sistema

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js v18.x  
- Docker y Docker Compose  
- Navegador basado en Chromium (Chrome, Edge, Brave, Opera, etc.)
- Conexión a MongoDB en `mongodb://localhost:27017/jaol_basedatos`

---

## ⚙️ Variables de entorno

Debes crear un archivo `.env` dentro de la carpeta `App/`. Este archivo contendrá las siguientes variables:

```env
MONGO_URI=mongodb://localhost:27017/jaol_basedatos
SECRETAUTH=tu_clave_secreta_para_autenticacion
PORT=3000
email=tu_correo@gmail.com
password=tu_token_de_aplicacion
```

> 🔐 Nota: La contraseña del correo NO es tu contraseña normal, sino el [token de aplicación de Gmail](https://support.google.com/mail/answer/185833?hl=es) generado para apps externas.

---

## 🐳 Configuración Docker (opcional)

Este proyecto incluye un `docker-compose.yml` para levantar un contenedor MongoDB localmente.

### Comando para levantar MongoDB:

```bash
docker-compose up -d
```

Esto expondrá MongoDB en el puerto `27017`.

---

## 📦 Instalación del proyecto

1. Clona el repositorio:

```bash
git clone https://tu-repositorio.com/jaol-systems.git
cd jaol-systems/App
```

2. Crea el archivo `.env` con las variables descritas anteriormente.

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta la aplicación en modo producción:

```bash
npm run production
```

> La app se ejecutará en el puerto definido por `process.env.PORT`.

---

## 🌐 Rutas disponibles - Backend (API)

| Método | Ruta                  | Descripción                             |
|--------|-----------------------|-----------------------------------------|
| POST   | `/auth/register`      | Registro de nuevos usuarios             |
| POST   | `/auth/login`         | Inicio de sesión                        |
| POST   | `/auth/forgot-password`| Solicitud de cambio de contraseña       |
| POST   | `/auth/reset-password`| Reestablecer contraseña con token       |
| GET    | `/products`           | Listar todos los productos              |
| POST   | `/products`           | Crear un nuevo producto                 |
| PUT    | `/products/:id`       | Editar producto por ID                  |
| DELETE | `/products/:id`       | Eliminar producto por ID                |

---

## 🧭 Rutas disponibles - Frontend (SPA React)

| Ruta                   | Componente              | Protección       |
|------------------------|-------------------------|------------------|
| `/auth`                | `AuthForms`             | Pública          |
| `/`                    | `Dashboard`             | Privada          |
| `/create`              | `Createproducts`        | Privada          |
| `/settings`            | `SettingsPage`          | Privada          |
| `/products`            | `ProductTable`          | Privada          |
| `/sales`               | `SalesTable`            | Privada          |
| `/invoicing`           | `Invoicing`             | Privada          |
| `/sellermanagement`    | `SellerManagement`      | Privada          |
| `/reports`             | `ReportsManagement`     | Privada          |
| `*`                    | `Page` (404)            | Pública          |

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **Nodemailer**
- **React**
- **React Router**
- **Docker**

---

## 📩 Soporte

Si necesitas ayuda o quieres reportar un bug, puedes contactar a:  
📧 juanandresojeda77@gmail.com

---

## 📝 Licencia

Este proyecto está bajo licencia MIT.
