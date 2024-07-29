import blobHome from "../../../assets/blobHome.png"
import { AiOutlineUser } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import payout1 from "../../../assets/payout1.png"
import payout2 from "../../../assets/payout2.png"
import payout3 from "../../../assets/payout3.png"
const Banner = () => {
    const recentsPayout = [
        {
            id:0,
            coinUser:"user@gmail.com",
            val:"3.02",
            title:"Roblox Game eCard 100 Robux",
            image:payout1
            
        },
        {
            id:2,
            coinUser:"abaab",
            val:"8",
            title:"PayPay 5£",
            image:payout2
        },
        {
            id:3,
            coinUser:"yousouf",
            val:"52",
            title:"Neosurf",
            image:payout3
        },
    ]
    return ( 
        <div className="bg-secondary  min-h-screen font-open relative z-30 overflow-hidden  ">
            <div className="  flex justify-between ">
                <div className=" my-auto pl-4 space-y-7 max-w-[600px]">
                <p className=" text-2xl text-accent font-bold">Use apps, games and surveys. Get paid in crypto, gift cards, or PayPal <FaDollarSign className="w-8 h-8 inline rounded-full  bg-orange-900 text-white text-center p-1 border-2 border-primary"/>. </p>
                <h1 className=" text-4xl font-bold text-neutral-900">Earn money on microtasks</h1>
                <button className=" uppercase text-white flex items-center gap-2 justify-center bg-primary p-2 rounded-full border-4 hover:border-primary hover:right-0 hover:scale-105 transition-all font-bold"><AiOutlineUser className=" text-xl"/><span>Create account</span></button>
                </div>
                <div className=" relative -right-40">
                <img src={blobHome} alt=""  className=""/>
                </div>
                
            </div>
            <div className=" p-4 ">
                <p className="text-accent uppercase font-bold py-5">Recents payouts</p>
                <div className=" flex gap-5 ">
                    {
                        recentsPayout.map((payout)=>(
                            <div key={payout.id} className=" bg-slate-300 rounded-3xl p-6 w-[40%] flex justify-between items-center">
                                <div>
                                        <h2 className=" font-bold">{payout.title}</h2>
                                        <p className=" text-accent">value : {payout.val} <FaDollarSign className="w-5 h-5 inline rounded-full  bg-orange-900 text-white text-center p-1 border-2 border-primary"/> Coins User: {payout.coinUser} </p>
                                </div>
                                <img src={payout.image} alt="" className=" w-14 h-14"/>
                               

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        
     );
}
 
export default Banner;