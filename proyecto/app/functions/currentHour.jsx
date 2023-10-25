
export const currentHour = () => {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes();
}