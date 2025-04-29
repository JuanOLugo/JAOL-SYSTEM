import req from "supertest";
import app from "../index";
import {
  conexionDbPrincipal,
  desconectarDbPrincipal,
} from "../BaseDeDatos/BaseDeDatos.conexion";

let userToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2ZkMmVlNWRjYTg5NWNjZmJhOWRmMWMiLCJub21icmV1c3VhcmlvIjoianVhbmFuZHJlcyIsImNvcnJlbyI6Imp1YW5hbmRyZXNAZ21haWwuY29tIiwiY3JlYWRvRW4iOiIyMDIxLTAxLTAxIiwiZXN0YWRvIjpmYWxzZSwicm9sIjoiYWRtaW4iLCJfX3YiOjAsImlhdCI6MTc0NDY0NTkwNH0.Yf0LVZUq-jr_JMNMZiInbedHLMArArjiRyQV0HTlmuI";

beforeAll(async () => {
  await conexionDbPrincipal();
});

afterAll(async () => {
  await desconectarDbPrincipal();
});

describe("test de la ruta productos", () => {
  it("Post Crear producto", async () => {
    const response = await req(app)
      .post("/api/product/create")
      .set("Authorization", `${"Bearer " + userToken}`)
      .send({
        codigo: "1234",
        nombre: "JUGUETE DE REGALO",
        precioCosto: 1000,
        precioVenta: 1500,
        proveedor: "Mattel",
        date: "01/01/2025",
      });
    console.log(response.body);
    if (response.status === 201) {
      expect(response.body.message).toBe("Producto creado");
    } else {
      console.log(response.body.error);
    }
  });

  it("Get Obtener productos", async () => {
    const response = await req(app)
      .post("/api/product/get")
      .send({
        skip: 0,
        filterProduct: "1234",
      })
      .set("Authorization", `${"Bearer " + userToken}`);

    console.log(response.body);
  });

  it("Delete Eliminar producto", async () => {
    const response = await req(app)
      .post("/api/product/delete")
      .send({
        ProductId: "67fd2fb85f1436e416ae0459",
      })
      .set("Authorization", `${"Bearer " + userToken}`);

    console.log(response.body);
  });

  it("Update Actualizar producto", async () => {
    const response = await req(app)
      .post("/api/product/update")
      .send({
        _id: "67fd3016e6353cdc829162f4",
        nombre: "JUGUETE DE REGALO 123456",
        precioDeCosto: 10000000,
        precioDeVenta: 15000000,
        stock: 12,
        proveedorNombre: "Mattel",
        creadoEn: "01/01/2025",
        actualizadoEn: "01/01/2025",
      })
      .set("Authorization", `${"Bearer " + userToken}`);

    console.log(response.body);
  });
});
