import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import UsuarioModel from "../BaseDeDatos/Modelos/Usuario.model";

// Configuracion de la estrategia
if(!process.env.SECRETAUTH) throw new Error("No se ha definido la variable de entorno SECRETAUTH")
const NuevaEstrategia: StrategyOptions = {
  secretOrKey: process.env.SECRETAUTH ,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

// Usar la estrategia con passport  
passport.use(
  new Strategy(NuevaEstrategia, async (payload, done) => {
    try {
      const { _id } = payload;
      
      const BuscarUsuario = await UsuarioModel.findOne({ _id });
      if (BuscarUsuario) return done(null, BuscarUsuario);
      return done(null, false);
    } catch (error) {
      done(null, error);
    }
  })
);

export const PassportStrategy = passport