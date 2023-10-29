"use client";
import LoginForm from "../LoginForm";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useSaveCurrentUser } from "./hooks/useSaveCurrentUser";

const FAKE_LIST = [
    {
        id: 111,
        nombre: "Dylan",
        password: 111,
        area: "Cajeros",
        rol: "Cajero",
    },
    {
        id: 21,
        nombre: "Abarrotes",
        password: 21,
        area: "Abarrotes",
        rol: "Gerente",
    },
    {
        id: 22,
        nombre: "Cuidado Personal",
        password: 22,
        area: "Cuidado Personal",
        rol: "Gerente",
    },
    {
        id: 23,
        nombre: "Mercancías",
        password: 23,
        area: "Mercancías",
        rol: "Gerente",
    },
    {
        id: 24,
        nombre: "Frescos",
        password: 24,
        area: "Frescos",
        rol: "Gerente",
    },
    {
        id: 333,
        nombre: "Alberto",
        password: 333,
        area: "Gerencia General",
        rol: "GerenteGeneral",
    },
    {
        id: 444,
        nombre: "John",
        password: 444,
        area: "Sistemas",
        rol: "Sistemas",
    },
]

const FAKE_BOXES_LIST = [
    {
        id: 111,
        caja: 1,
    },
]

export default function Login () {
    const router = useRouter();
    const [, setUser] = useSaveCurrentUser();

    const handledOnSubmit = (formData) => {
        const user = FAKE_LIST.find((u) => u.id == formData.id);
        if (user && user.password == formData.password) {
            if (user.area == "Cajeros") {
                setUser({...user, caja: getBox(user.id)});
            }
            else {
                setUser(user);
            }
            pushPageByRol(user.rol);
        }
        else {
            toast.error("Error!", {description:"Usuario o Contraseña Incorrecto!"});
        }
    } 

    const getBox = (id) => {
        const user = FAKE_BOXES_LIST.find((p) => p.id == id);
        if (user) return user.caja;
        return 0;
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
