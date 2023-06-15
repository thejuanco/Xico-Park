//Creando los modelos de la base de datos 
import Cajones from "./Cajones.js";
import Cobrador from "./Cobrador.js";
import Estacionamiento from "./Estacionamiento.js";
import Inspector from "./Inspector.js";
import Multas from "./Multas.js";
import Pagos from "./Pagos.js";
import SuperUsuario from "./SuperUsuario.js";
import Usuario from "./Usuario.js";

//Estableciendo relaciones de la base de datos
Cajones.belongsTo(Estacionamiento, {foreignKey: 'idCajon'})
Pagos.belongsTo(Cajones, {foreignKey: 'idEstacionamiento'});
Cobrador.hasMany(Pagos, {foreignKey: 'idPagos'});
Usuario.hasMany(Pagos, {foreignKey: 'idPagos'});
Usuario.hasMany(Multas, {foreignKey: 'idMultas'});
Usuario.hasMany(Estacionamiento, {foreignKey: 'idCajon'});
Inspector.hasMany(Multas, {foreignKey: 'idMultas'})

export {
    Cajones,
    Cobrador,
    Estacionamiento,
    Inspector,
    Multas,
    Pagos,
    SuperUsuario,
    Usuario
}