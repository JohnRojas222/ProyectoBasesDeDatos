"use client";
import LoginForm from "../LoginForm";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useSaveCurrentUser } from "./hooks/useSaveCurrentUser";

const FAKE_LIST = [
    {
        id: 111,
        password: 111,
        nombre: "Dylan",
        rol: "Cajero",
    },
    {
        id: 222,
        password: 222,
        nombre: "Camilo",
        rol: "Gerente",
    },
    {
        id: 333,
        password: 333,
        nombre: "Alberto",
        rol: "GerenteGeneral",
    },
    {
        id: 444,
        password: 444,
        nombre: "John",
        rol: "Sistemas",
    },
]

export default function Login () {
    const router = useRouter();
    const [, setUser] = useSaveCurrentUser();

    const handledOnSubmit = (formData) => {
        const user = FAKE_LIST.find((u) => u.id == formData.id);
        if (user && user.password == formData.password) {
            setUser(user);
            pushPageByRol(user.rol);
        }
        else {
            toast.error("Error!", {description:"Usuario o Contraseña Incorrecto!"});
        }
    } 

    const pushPageByRol = (rol) => {
        const roles = { 
            Cajero: "/Vender",
            Gerente: "/Gerente",
            GerenteGeneral: "/GerenteGeneral",
            Sistemas: "/Sistemas",
        }
        router.push(roles[rol]);
    }
    
    return (
        <>
            <LoginForm handleSubmit={handledOnSubmit}/>
            <Toaster richColors closeButton/>
        </>
    );
}
