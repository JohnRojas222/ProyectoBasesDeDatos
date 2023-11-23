import GenericCrud from './GenericCrud';
class BitacoraCrud extends GenericCrud {
    constructor() {
        super("BitacoraVentas");
    }

    async read() {
        const result = await super.read();
        console.log(result);
        return result;
    }
}

export default BitacoraCrud;