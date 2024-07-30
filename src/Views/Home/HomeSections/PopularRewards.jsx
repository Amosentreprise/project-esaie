import { FaCheck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import reward from "../../../assets/payout1.png"
import reward2 from "../../../assets/payout2.png"
import reward3 from "../../../assets/payout3.png"
import itune from "../../../assets/itune.png"
const PopularRewards = () => {
    const coins = [
           {
            id:0,
            name:"Grift Cards"
           },
           {
            id:1,
            name:"PayPay"
           },
           {
            id:2,
            name:"Crypto"
           },
           {
            id:3,
            name:"...and way more"
           },
    ]
    const popularRewards = [
        {
            id:0,
            from:1,
            name:"PayPal",
            image:reward,
            options:["MONEY", "Paypal"]
        },
        {
            id:1,
            from:7,
            name:"Itune",
            image:itune,
            options:["MONEY", "Paypal"]
        },
        {
            id:2,
            from:5,
            name:"PayPal",
            image:reward2,
            options:["MONEY", "Paypal"]
        },
        {
            id:3,
            from:8,
            name:"PayPal",
            image:reward3,
            options:["MONEY", "Paypal"]
        },
        {
            id:4,
            from:1,
            name:"PayPal",
            image:reward2,
            options:["MONEY", "Paypal"]
        },
        {
            id:5,
            from:1,
            name:"PayPal",
            image:reward,
            options:["MONEY", "Paypal"]
        },
    ]
    return ( 
        <div className="bg-slate-100 font-open ">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#cbd5e1" fillOpacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,240C213.3,245,267,267,320,272C373.3,277,427,267,480,256C533.3,245,587,235,640,229.3C693.3,224,747,224,800,208C853.3,192,907,160,960,170.7C1013.3,181,1067,235,1120,250.7C1173.3,267,1227,245,1280,218.7C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
           </svg>
            <div className="min-h-screen w-full bg-slate-300 p-8 flex gap-32 ">
                
                <div className=" space-y-5 w-[400px]">
                    <div className=" space-y-3">
                       <h2 className=" text-3xl font-bold text-neutral-900">Popular rewards</h2>
                       <p className=" text-xl text-accent font-bold">Exchange Coins for valuable rewards:</p>
                    </div>
                    <div>
                        <ul className=" space-y-4">
                            {
                                coins.map((coin)=>{
                                    return (
                                        <li key={coin.id} className=" flex gap-6 items-center"><FaCheck className=" text-xl text-primary"/> <span className=" text-accent font-semibold">{coin.name}</span></li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                     <div className=" max-w-[300px]"> <button className="  w-full uppercase text-white flex items-center justify-evenly bg-primary p-2 px-8 rounded-full border-4 hover:border-primary hover:right-0 hover:scale-105 transition-all font-bold"><FaDollarSign className=" text-xl"/><span>Get coins</span></button></div>
                </div>
                <div className="w-full flex flex-col">
                    
                    <div className="  grid grid-cols-2 gap-5 ">
                        {
                            popularRewards.map((reward)=>{
                                return(
                                    <div key={reward.id} className=" bg-white p-3 rounded-lg h-[200px] flex justify-evenly items-center gap-2 transform hover:-translate-y-3 hover:shadow-2xl transition-all">
                                        <div className=" flex flex-col justify-between">
                                            <div>
                                                <h2 className=" font-bold text-neutral-900">PayPal</h2>
                                                <p className=" text-accent">from : { reward.from} <FaDollarSign className="w-5 h-5 inline rounded-full  bg-orange-900 text-white text-center p-1 border-2 border-primary"/> Coins</p>
                                            </div>
                                            
                                            
                                            <ul className=" flex flex-wrap gap-3 bg-secondary rounded-full p-2 ">
                                                {
                                                    reward.options.map((option)=>(<li key={option} >{option}</li>))
                                                }
                                            </ul>
                                        </div>
                                        <img src={reward.image} alt="" className=" w-28 h-28 rounded-md object-cover" />
                                        

                                    </div>
                                )
                            })
                        }
                    

                    </div>
                    <button className=" mx-auto mt-4 p-2 rounded-full bg-white  font-bold  hover:scale-105 transition-all text-accent uppercase ">See all rewards</button>
                

                </div>

               
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#cbd5e1" fillOpacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,240C213.3,245,267,267,320,272C373.3,277,427,267,480,256C533.3,245,587,235,640,229.3C693.3,224,747,224,800,208C853.3,192,907,160,960,170.7C1013.3,181,1067,235,1120,250.7C1173.3,267,1227,245,1280,218.7C1333.3,192,1387,160,1413,144L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
        </div>
        
     );
}

export default PopularRewards;