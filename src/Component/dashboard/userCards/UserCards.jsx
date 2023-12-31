import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/Authprovider";
import ShowCardsData from "./ShowCardsData";
import { Link } from "react-router-dom";
import useCards from "../../../hooks/useCards";

const UserCards = () => {
    const {user} = useContext(AuthContex)

    const [cards, refetch,isLoading ] = useCards()


    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const total = cards.reduce((accumulator, product) => {
            return accumulator + (parseFloat(product?.price)* parseFloat(product?.items));
          }, 0);
          setTotalPrice(total);
        },[cards])


    return (
        <div className="px-4 py-10 border">
        <h2 className="uppercase text-center text-xl md:text-4xl font-bold">My Cards</h2>
        <div className="border my-5 p-2 md:p-20">
            <div className="flex justify-between items-center">
            <h2 className="uppercase text-3xl font-semibold ">total items : {cards?.length}</h2>
            <h2 className="uppercase text-3xl font-semibold text-red-600">total Price : ${totalPrice}</h2>
            {/* <Link to={'/dashboard/checkOut'}><h2 className=" text-xl font-semibold border px-4 py-3 cursor-pointer duration-300 ease-in-out rounded-md hover:text-white hover:bg-green-600">All Checkout</h2></Link> */}
            </div>
            {
                cards.map(card=><ShowCardsData key={card?._id} card={card}></ShowCardsData>)
            }
        </div>
    </div>
    );
};

export default UserCards;