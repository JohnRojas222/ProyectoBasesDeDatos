export default async function useDeleteData(dataPath, data) {
    const result = await fetch(`${dataPath}`, {
        method: "DELETE",
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
