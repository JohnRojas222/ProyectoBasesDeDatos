import { useEffect, useState } from "react";

export default function useGetData (dataPath) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${dataPath}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, [dataPath]);

    return data;
}
