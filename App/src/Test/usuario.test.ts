import req from "supertest";
import app from "../index";
import {
  conexionDbPrincipal,
  desconectarDbPrincipal,
} from "../BaseDeDatos/BaseDeDatos.conexion";

//Antes de hacer los test comenta la linea de app.listen para que pueda funcionar los respectivos test

beforeAll(async () => {
  await conexionDbPrincipal();
});

afterAll(async () => {
  await desconectarDbPrincipal();
});

let userToken: string = "";

describe("Test de la ruta usuarios", () => {
  it("Post Registrar usuario", async () => {
    const response = await req(app).post("/api/auth/register").send({
      username: "juanandres",
      email: "juanandres@gmail.com",
      password: "123456",
      role: "admin",
      createdIn: "2021-01-01",
    });

    if (response.status === 200) {
      expect(response.body.msg).toBe("User registered");
      userToken = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
      console.log("Token registrado Registrar usuario: ", userToken);
    } else {
      expect(response.body.msg).toBe("El usuario ya existe");
      console.log("Error al registrar el usuario: ", response.body.msg);
    }
  });

  it("post Log in", async () => {
    const response = await req(app).post("/api/auth/login").send({
      email: "juanandres@gmail.com",
      password: "123456",
    });
    
    if(response.status === 200){
      userToken = response.headers["set-cookie"][0].split(";")[0].split("=")[1];
      console.log("Token registrado Iniciar sesion: ", userToken);
      expect(response.status).toBe(200);
    } else {
      expect(response.status).toBe(400);
      console.log("Error al iniciar sesion: ", response.body.msg);
    }
  });
});
