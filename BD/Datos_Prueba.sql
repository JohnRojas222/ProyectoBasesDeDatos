alter session set "_ORACLE_SCRIPT"=true;
-- Insert para TipoArea
INSERT INTO admin.TipoArea (Codigo, Descripcion) VALUES ('A001', 'Abarrotes');
INSERT INTO admin.TipoArea (Codigo, Descripcion) VALUES ('A002', 'Cuidado Personal');
INSERT INTO admin.TipoArea (Codigo, Descripcion) VALUES ('A003', 'Mercancias');
INSERT INTO admin.TipoArea (Codigo, Descripcion) VALUES ('A004', 'Frescos');

-- Insert para TipoUsuario
INSERT INTO admin.TipoUsuario (Codigo, Descripcion) VALUES ('U001', 'Cajero');
INSERT INTO admin.TipoUsuario (Codigo, Descripcion) VALUES ('U002', 'Gerente');
INSERT INTO admin.TipoUsuario (Codigo, Descripcion) VALUES ('U003', 'Gerente General');
INSERT INTO admin.TipoUsuario (Codigo, Descripcion) VALUES ('U004', 'Sistemas');

-- Insert para Usuario
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR001', 'Dylan', '111', 'A001', 'U001');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR002', 'Camilo', '222', 'A001', 'U002');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR003', 'Alberto', '333', 'A002', 'U002');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR004', 'John', '444', 'A003', 'U002');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR005', 'Alejandro', '555', 'A004', 'U002');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR006', 'Julia', '666', 'A001', 'U003');
INSERT INTO admin.Usuario (Codigo, Nombre, Password, Area, Rol) VALUES ('USR007', 'Luisa', '777', 'A001', 'U004');

-- Insert para Cajeros
INSERT INTO Cajero (Usuario, Caja) VALUES ('USR001', 1);

-- Insert para Productos
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('1122334455667', 'Aceite', 'A001', 5000, 5, 50);
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('2233445566778', 'Arroz', 'A001', 3000, 3, 30);
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('3344556677889', 'Jabon', 'A002', 1500, 2, 40);
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('4455667788990', 'Perfume', 'A002', 4000, 4, 40);
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('5566778899001', 'Televisor', 'A003', 50000, 300, 10);
INSERT INTO admin.Productos (EAN, Descripcion, Area, Precio, Peso, Cantidad) VALUES ('6677889900112', 'Cocina', 'A003', 100000, 500, 5);
INSERT INTO admin.Productos (PLU, EAN, Descripcion, Area, Precio, Peso) VALUES ('12345', '7788990011223', 'Tomates', 'A004', 1000, 5);
INSERT INTO admin.Productos (PLU, EAN, Descripcion, Area, Precio, Peso) VALUES ('67890', '8899001122334', 'Papas', 'A004', 1250, 10);

COMMIT;