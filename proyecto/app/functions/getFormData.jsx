
export const getFormData = (e) => {
    const formData = {};
    const inputs = e.target.querySelectorAll('input');
    for (const input of inputs) {
        formData[input.name] = input.value;
    }
    return formData;
}
