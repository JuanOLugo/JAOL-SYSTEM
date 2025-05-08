import express from "express";
import cors from "cors";
import path from "path";
import { conexionDbPrincipal } from "./BaseDeDatos/BaseDeDatos.conexion";
import { PassportStrategy } from "./Autentificacion/Passport.config";
import usuarioRutas from "./Rutas/usuario.rutas";
import productoRutas from "./Rutas/productos.rutas";
import facturasRutas from "./Rutas/facturas.rutas";
import vendedorRutas from "./Rutas/vendedor.rutas";
import { config } from "dotenv";
config()
const app = express();

// middlewares necesarios para el servidor
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(PassportStrategy.initialize());
app.use("/api/auth", usuarioRutas);
app.use("/api/product", productoRutas);
app.use("/api/invoice", facturasRutas);
app.use("/api/seller", vendedorRutas);

//Renderizar html como estatico en la carpeta public
app.use(express.static(path.join(__dirname, "../public/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/frontend/dist", "index.html"))
);

//Configuracion del servidor & puerto
if(!process.env.PORT) throw new Error("No se ha definido la variable de entorno PORT")
const server_port = parseInt(process.env.PORT);
app.listen(server_port, () => {
  console.log("Servidor esta activo en el puerto:", server_port);
  conexionDbPrincipal();
});
export default app;
