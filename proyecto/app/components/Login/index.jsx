"use client";
import LoginForm from "../LoginForm";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useSaveCurrentUser } from "./hooks/useSaveCurrentUser";
import useGetData from "@/app/hooks/useGetData";

export default function Login () {
    const router = useRouter();
    const users = useGetData("/api/users");
    const boxes = useGetData("/api/boxes");
    const [, setUser] = useSaveCurrentUser();

    const handledOnSubmit = (formData) => {
        const user = users.find((u) => u.CODIGO == formData.codigo);
        if (user && user.PASSWORD == formData.password) {
            if (user.AREA == "A001") {
                setUser({...user, CAJA: getBox(user.CODIGO)});
            }
            else {
                setUser(user);
            }
            pushPageByRol(user.ROL);
        }
        else {
            toast.error("Error!", {description:"Usuario o Contraseña Incorrecto!"});
        }
    } 

    const getBox = (usuario) => {
        const user = boxes.find((c) => c.USUARIO === usuario);
        console.log(user);
        if (user) return user.CAJA;
        return 0;
    }

    const pushPageByRol = (rol) => {
        const roles = { 
            U001: "/Vender",
            U002: "/Gerente",
            U003: "/GerenteGeneral",
            U004: "/Sistemas",
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
