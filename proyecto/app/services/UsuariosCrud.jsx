import GenericCrud from './GenericCrud';

class UsuariosCrud extends GenericCrud {
    constructor() {
        super("Usuario");
    }

    async create({ codigo, nombre, password, area, rol }) {
        return await super.create({
            Codigo: codigo,
            Nombre: nombre,
            Password: password,
            Area: area,
            Rol: rol,
        });
    }

    async read() {
        return await super.read();
    }

    async update(codigo, { nombre, password, area, rol }) {
        const data = {};
        
        if (nombre) data.Nombre = nombre;
        if (password) data.Password = password;
        if (area) data.Area = area;
        if (rol) data.Rol = rol;

        return await super.update(data, `Codigo = '${codigo}'`);
    }

    async delete(codigo) {
        return await super.delete(`Codigo = '${codigo}'`);
    }
}

export default UsuariosCrud;
