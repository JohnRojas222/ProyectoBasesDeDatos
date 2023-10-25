import { useEffect, useState } from 'react';

export const useGetCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    }, []);

    return currentUser;
}
