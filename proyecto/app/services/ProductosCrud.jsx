import GenericCrud from './GenericCrud';

class ProductosCrud extends GenericCrud {
    constructor() {
        super("Productos");
    }

    async create({ producto, ean, descripcion, precio, plu, peso }) {
        return await super.create({
            Producto: producto,
            EAN: ean,
            Descripcion: descripcion,
            Precio: precio,
            PLU: plu,
            Peso: peso
        });
    }

    async read() {
        return await super.read();
    }

    async update(producto, { ean, descripcion, precio, plu, peso }) {
        const data = {};
        if (ean) data.EAN = ean;
        if (descripcion) data.Descripcion = descripcion;
        if (precio) data.Precio = precio;
        if (plu) data.PLU = plu;
        if (peso) data.Peso = peso;

        return await super.update(data, `Producto = '${producto}'`);
    }

    async delete(producto) {
        return await super.delete(`Producto = '${producto}'`);
    }
}

export default ProductosCrud;
