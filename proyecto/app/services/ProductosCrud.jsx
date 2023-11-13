import GenericCrud from './GenericCrud';

class ProductosCrud extends GenericCrud {
    constructor() {
        super("Productos");
    }

    async create({ plu, ean, descripcion, area, precio, peso, cantidad }) {
        return await super.create({
            PLU: plu,
            EAN: ean,
            Descripcion: descripcion,
            Area: area,
            Precio: precio,
            Peso: peso,
            Cantidad: cantidad,
        });
    }

    async read() {
        return await super.read();
    }

    async update(ean, { descripcion, area, precio, peso, cantidad }) {
        const data = {};
        
        if (descripcion) data.Descripcion = descripcion;
        if (area) data.Area = area;
        if (precio) data.Precio = precio;
        if (peso) data.Peso = peso;
        if (cantidad) data.Cantidad = cantidad;

        return await super.update(data, `EAN = '${ean}'`);
    }

    async delete(ean) {
        return await super.delete(`EAN = '${ean}'`);
    }
}

export default ProductosCrud;
