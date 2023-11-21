AUDIT ALL;

SELECT  TO_CHAR(timestamp, 'YYYY-MM-DD'),
      TO_CHAR(timestamp, 'HH24:MI:SS'),
      USERNAME, 
      ACTION_NAME,
      OBJ_NAME
      FROM DBA_AUDIT_TRAIL
      where action_name IN ('SELECT', 'INSERT', 'UPDATE', 'DELETE');

CREATE OR REPLACE TRIGGER trg_bitacora
AFTER INSERT OR UPDATE OR DELETE ON Productos
FOR EACH ROW
DECLARE
    v_operacion VARCHAR2(100);
BEGIN
    IF INSERTING THEN
        v_operacion := 'INSERT en T';
    ELSIF UPDATING THEN
        v_operacion := 'UPDATE en T';
    ELSIF DELETING THEN
        v_operacion := 'DELETE en T';
    END IF;

    -- Insertar en la tabla Bitacora
    INSERT INTO Bitacora (Codigo, OperacionRealizada, Usuario, Fecha, Hora, Tabla)
    VALUES ('bitacora1', v_operacion, "USR001", SYSDATE, TO_CHAR(SYSDATE, 'HH24:MI'), 'T');
END;
/