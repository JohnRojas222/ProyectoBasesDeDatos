export function objectToString(objeto) {
    // Inicializamos una matriz para almacenar pares clave-valor
    var pares = [];

    // Recorremos las propiedades del objeto
    for (var clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            // Creamos el string "clave = valor" y lo agregamos a la matriz
            pares.push(`${clave} = '${objeto[clave]}'`);
        }
    }

    // Unimos los elementos de la matriz en un solo string, separados por comas
    return pares.join(', ');
}
