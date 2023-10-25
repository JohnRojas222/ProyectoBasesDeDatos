
export const currentDate = () => {
    const date = new Date().toLocaleDateString();
    const left = date.split("/");
    return left[2] + "-" + left[1] + "-" + left[0];
}
