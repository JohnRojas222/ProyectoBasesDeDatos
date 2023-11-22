import GenericCrud from './GenericCrud';
class BitacoraCrud extends GenericCrud {
    constructor() {
        super("BitacoraVentas");
    }

    async read() {
        return await super.read();
    }
}

export default BitacoraCrud;