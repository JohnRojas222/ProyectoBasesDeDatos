import { toast } from 'sonner';

export const checkFields = (e) => {
    e.preventDefault();
    const form = e.target;
    for (const field of form) {
        if (!field.value && field.name != "") {
            toast("Oh no!", {description:`El campo ${field.name} no puede estar vacío.`});
            return false;
        }
    }
    return true;
}
