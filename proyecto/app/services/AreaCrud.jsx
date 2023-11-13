import GenericCrud from './GenericCrud';

class AreaCrud extends GenericCrud {
    constructor() {
        super("TipoArea");
    }

    async create({ Codigo, Descripcion }) {
        return await super.create({
            Codigo: Codigo,
            Caja: Descripcion,
        });
    }

    async read() {
        return await super.read();
    }

    async update(Codigo, { Descripcion }) {
        const data = {};
        
        if (Descripcion) data.Descripcion = Descripcion;

        return await super.update(data, `Codigo = '${Codigo}'`);
    }

    async delete(Codigo) {
        return await super.delete(`Codigo = '${Codigo}'`);
    }
}

export default AreaCrud;
