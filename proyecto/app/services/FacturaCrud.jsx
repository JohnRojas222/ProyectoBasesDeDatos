import GenericCrud from './GenericCrud';

class FacturaCrud extends GenericCrud {
    constructor() {
        super("Factura");
    }

    async create({ Producto, Cantidad, SubTotal, Total, Cajero, Fecha, Hora }) {
        return await super.create({
            Producto: Producto,
            Cantidad: Cantidad,
            SubTotal: SubTotal, 
            Total: Total,
            Cajero: Cajero,
            Fecha: Fecha,
            Hora: Hora,
        });
    }

    async read() {
        return await super.read();
    }

    async update(Codigo, { Producto, Cantidad, SubTotal, Total, Cajero, Fecha, Hora }) {
        const data = {};
        
        if (Producto) data.Producto = Producto;
        if (Cantidad) data.Cantidad = Cantidad;
        if (SubTotal) data.SubTotal = SubTotal;
        if (Total) data.Total = Total;
        if (Cajero) data.Cajero = Cajero;
        if (Fecha) data.Fecha = Fecha;
        if (Hora) data.Hora = Hora;

        return await super.update(data, `Codigo = '${Codigo}'`);
    }

    async delete(Codigo) {
        return await super.delete(`Codigo = '${Codigo}'`);
    }
}

export default FacturaCrud;