import GenericCrud from './GenericCrud';

class ProductosCrud extends GenericCrud {
    constructor() {
        super("Productos");
    }

    async create({ PLU, EAN, Descripcion, Area, Precio, Peso, Cantidad }) {
        return await super.create({
            PLU: PLU ? PLU : "NULL",
            EAN: EAN,
            Descripcion: Descripcion,
            Area: Area,
            Precio: Precio,
            Peso: Peso,
            Cantidad: Cantidad ? Cantidad : "NULL",
        });
    }

    async read() {
        return await super.read();
    }

    async update(EAN, { Descripcion, Area, Precio, Peso, Cantidad }) {
        const data = {};
        
        if (Descripcion) data.Descripcion = Descripcion;
        if (Area) data.Area = Area;
        if (Precio) data.Precio = Precio;
        if (Peso) data.Peso = Peso;
        if (Cantidad) data.Cantidad = Cantidad;

        return await super.update(data, `EAN = '${EAN}'`);
    }

    async delete(EAN) {
        return await super.delete(`EAN = '${EAN}'`);
    }
}

export default ProductosCrud;
