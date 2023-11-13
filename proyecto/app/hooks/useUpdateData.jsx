export default async function useUpdateData(dataPath, data) {
    const result = await fetch(`${dataPath}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!result.ok) {
        throw new Error("Error");
    }

    return await result.json();
};
