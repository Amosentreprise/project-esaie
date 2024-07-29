import step1 from "../../../assets/step01.png"
import step2 from "../../../assets/step02.png"
import step3 from "../../../assets/step03.png"
const HowWork = () => {
    const steps = [
        {
            id:1,
            imageStep:step1,
            title:"Complete tasks from advertisers",
            contenu:"Our partners promote products and conduct market research on Earnweb via Tasks - app testing, surveys, trial period signups, and more.",
            step:"01",
            color:"border-4"

        },
        {
            id:2,
            imageStep:step2,
            title:"Advertisers pay us - we pay you",
            contenu:"Each Task has an assigned rate that tells you how many Coins ($) you can get for it. We take only a small fee from the payout - the larger part goes to you.",
            step:"02",
            color:"border-4 "

        },
        {
            id:3,
            imageStep:step3,
            title:"Quick, easy and versatile withdrawals",
            contenu:"Get your money as a PayPal or crypto payout. You can also choose from variety of gift card options - Amazon, Steam, Google Play, and many more.",
            step:"03",
            color:"border-4 border-primary"

        },
    ]
    return ( 
        <div className=" min-h-[400px] bg-white p-5 space-y-6 font-open">
            <h2 className=" text-3xl font-bold text-neutral-900">How does it work?</h2>

            <div className="flex flex-wrap gap-3">
                {
                    steps.map((step)=>{
                        return (
                            <div key={step.id} className={`w-[32%] p-6 space-y-3 rounded-lg border-4 bg-white flex flex-col ${step.color}`}>
                                <img src={step.imageStep} alt="" className=" w-20 h-20 object-cover mx-auto" />
                                <div>
                                    <p className=" font-bold relative z-30 text-accent text-6xl opacity-40">{step.step}</p>
                                    <h2 className=" text-xl font-bold relative -top-8 z-40">{step.title}</h2>
                                
                                </div>
                                <p className=" text-accent">{step.contenu}</p>


                            </div>
                        )
                    })
                }
               
            </div>

        </div>
     );
}
 
export default HowWork;