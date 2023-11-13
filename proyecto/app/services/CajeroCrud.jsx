import GenericCrud from './GenericCrud';

class CajeroCrud extends GenericCrud {
    constructor() {
        super("Cajero");
    }

    async create({ usuario, caja }) {
        return await super.create({
            Usuario: usuario,
            Caja: caja,
        });
    }

    async read() {
        return await super.read();
    }

    async update(usuario, { caja }) {
        const data = {};
        
        if (caja) data.Caja = caja;

        return await super.update(data, `Usuario = '${usuario}'`);
    }

    async delete(usuario) {
        return await super.delete(`Usuario = '${usuario}'`);
    }
}

export default CajeroCrud;
