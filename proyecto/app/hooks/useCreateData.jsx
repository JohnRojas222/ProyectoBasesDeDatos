export default async function useCreateData(dataPath, data) {
    const result = await fetch(`${dataPath}`, {
        method: "POST",
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
