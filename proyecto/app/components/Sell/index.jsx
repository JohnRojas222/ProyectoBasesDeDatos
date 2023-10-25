import SellForm from "../SellForm";

export default function Sell ({list}) {
    return (
        <>
            <SellForm productsList={list}/>
        </>
    );
}