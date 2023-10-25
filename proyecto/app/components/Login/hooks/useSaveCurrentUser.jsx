import { useEffect, useState } from "react"

export const useSaveCurrentUser = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }, [user]);

    return [user, setUser];
}
