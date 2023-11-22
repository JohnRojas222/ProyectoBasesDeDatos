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

    async read(codigo, password) {
        const data = await super.read(`where CODIGO = '${codigo}'`);
        console.log(data);
        const role = await super.userRole(`WHERE GRANTEE = '${data[0].CODIGO}'`)
        console.log("AAAAAAAAAAA", role);
        super.chageConection(codigo, password)
        console.log("AAAAAAAAAAA", role);
        return data;
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
