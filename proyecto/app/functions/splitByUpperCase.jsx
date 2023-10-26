
export const splitByUpperCase = (string) => {
    const words = string.split(/(?=[A-Z])/);
    const result = words.join(' ').toLowerCase().replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });

    return result;
}
