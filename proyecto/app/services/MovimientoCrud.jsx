import GenericCrud from './GenericCrud';
class MovimientoCrud extends GenericCrud {
    constructor() {
        super("bitacora");
    }

    async read() {
        return await super.read();
    }
}

export default MovimientoCrud;