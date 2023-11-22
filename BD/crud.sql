
-- Rol y privilegios de Cajero
alter session set"_oracle_script"=true;
CREATE ROLE Cajero;

GRANT CONNECT TO Cajero;

GRANT
SELECT
    ON admin.Productos TO Cajero;

GRANT
INSERT
    ON admin.Factura to Cajero;

GRANT
SELECT
    ON admin.Factura TO Cajero;

-- Rol y privilegios de Gerente
CREATE ROLE Gerente;

GRANT CONNECT TO Gerente;

GRANT
SELECT
    ON admin.Productos TO Gerente;

GRANT
UPDATE
    ON admin.Productos TO Gerente;

-- Rol y privilegios de GerenteGeneral
CREATE ROLE GerenteGeneral;

GRANT CONNECT TO GerenteGeneral;

GRANT DBA TO GerenteGeneral;

GRANT
SELECT
    ON admin.Productos TO GerenteGeneral;

GRANT
INSERT
    ON admin.Productos TO GerenteGeneral;

GRANT
UPDATE
    ON admin.Productos TO GerenteGeneral;

GRANT DELETE ON admin.Productos TO GerenteGeneral;

-- Rol y privilegios de Sistemas
CREATE ROLE Sistemas;

GRANT CONNECT TO Sistemas;

GRANT DBA TO Sistemas;
GRANT CREATE TRIGGER TO Sistemas;

GRANT
SELECT
    ON admin.Productos TO Sistemas;

GRANT
INSERT
    ON admin.Productos TO Sistemas;

GRANT
UPDATE
    ON admin.Productos TO Sistemas;

GRANT DELETE ON admin.Productos TO Sistemas;

alter session set"_oracle_script"=true;

CREATE USER admin IDENTIFIED BY admin;
GRANT CONNECT, RESOURCE TO admin;
GRANT UNLIMITED TABLESPACE TO admin;
GRANT DBA TO admin;
COMMIT;
CONN admin/admin

alter session set"_oracle_script"=true;
CREATE USER USR001 IDENTIFIED BY 111;
GRANT CONNECT TO USR001;
GRANT Cajero to USR001;

CREATE USER USR002 IDENTIFIED BY 222;
GRANT CONNECT TO USR002;
GRANT Gerente to USR002;

CREATE USER USR003 IDENTIFIED BY 333;
GRANT CONNECT TO USR003;
GRANT Gerente to USR003;

CREATE USER USR004 IDENTIFIED BY 444;
GRANT CONNECT TO USR004;
GRANT Gerente to USR004;

CREATE USER USR005 IDENTIFIED BY 555;
GRANT CONNECT TO USR005;
GRANT Gerente to USR005;

CREATE USER USR006 IDENTIFIED BY 666;
GRANT CONNECT TO USR006;
GRANT GerenteGeneral to USR006;

CREATE USER USR007 IDENTIFIED BY 777;
GRANT CONNECT TO USR007;
GRANT Sistemas to USR007;



CREATE OR REPLACE TRIGGER trg_bitacora
AFTER INSERT ON admin.Productos
FOR EACH ROW
DECLARE
  v_codigo_bitacora VARCHAR2(50);
BEGIN
  -- Generar un código único para la bitácora (puedes ajustar esto según tus necesidades)
  v_codigo_bitacora := TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS');

  -- Insertar en la tabla de bitácora
  INSERT INTO admin.bitacora (Codigo, OperacionRealizada, Usuario, Fecha, Hora, Tabla)
  VALUES (v_codigo_bitacora, 'INSERT en productos', USER, TO_CHAR(SYSDATE, 'YYYY-MM-DD'), TO_CHAR(SYSDATE, 'HH24:MI'), 'productos');
END;
/


CREATE OR REPLACE TRIGGER ActualizarCantidadProducto
AFTER INSERT ON admin.Factura
FOR EACH ROW
DECLARE
  v_codigo_bitacora VARCHAR2(50);
  v_CodigoFactura admin.Factura.Codigo%TYPE;
BEGIN
  -- Generar un código único para la bitácora (puedes ajustar esto según tus necesidades)
  v_codigo_bitacora := TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS');
  SELECT Codigo INTO v_CodigoFactura FROM admin.Factura WHERE ROWID = :NEW.ROWID;
  -- Actualizar la cantidad del producto en la tabla Productos
  UPDATE Productos
  SET cantidad = cantidad - :NEW.Cantidad
  WHERE EAN = :NEW.Producto;

  INSERT INTO admin.BitacoraVentas(Bitacora, Factura)
  values(v_codigo_bitacora, v_CodigoFactura);
END;
/