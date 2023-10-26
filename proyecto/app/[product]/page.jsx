import TNav from "../components/TNav";

export default function Page({ params }) {
    return (
        <>
            <TNav/>
            {params.product}
        </>
    );
}