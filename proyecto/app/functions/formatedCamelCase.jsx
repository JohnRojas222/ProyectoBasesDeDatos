
export const formatedCamelCase = (cadena) => {
    var palabras = cadena.split(' ');

    palabras[0] = palabras[0].toLowerCase();

    for (var i = 1; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    var resultado = palabras.join('');

    return resultado;
}
