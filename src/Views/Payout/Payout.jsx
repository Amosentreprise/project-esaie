import { FaFilter, FaSearch, FaDollarSign } from 'react-icons/fa';
import rewards from "../../assets/rewards.png";
import paypal from "../../assets/payout1.png";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import { useState } from 'react';
import LoginRegister from '../LoginRegister/LoginRegister';

const Payout = () => {
    const [modal, setModal] = useState(false);
    function handleClick (){
     setModal(true);
    }
    const cartegories = ["Virtual Currencies", "Game Keys", "Gift cards", "Money"]
    const payements = [
        { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
        { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
        { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
        { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
        { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
        { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
        { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
        { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
        { name: 'Paypal', amount: '1.2', type1: 'MONEY', type2: 'PAYPAL', image: paypal },
        { name: 'iTunes', amount: '2.6', type1: 'GIFT CARDS', type2: 'ITUNES', image: paypal },
        { name: 'Binance', amount: '3.44', type1: 'VIRTUAL CURRENCIES', type2: 'BINANCE', image: paypal },
        { name: 'Crypto Voucher', amount: '4.99', type1: 'VIRTUAL CURRENCIES', type2: 'CRYPTO VOUCHER', image: paypal },
    ]
    return ( 
        <div>
            <Nav  onClick={handleClick}/>
            <div className='bg-secondary w-full h-auto min-h-screen overflow-x-hidden'>
                <div className="container mx-auto p-4">
                    <div className="pt-12">
                        <h1 className="text-3xl text-slate-950 font-bold mt-10">Rewards List</h1>
                        <ol className="">
                            <li className="inline-block">
                                <a href="/rewards" className=" text-xs text-zinc-700">Rewards List</a>
                            </li>
                        </ol>
                    </div>

                    <div className='flex '>
                        {/* Filtered Reward */}
                        <div className="h-[500px] w-[400px] mt-4 bg-white rounded-3xl sticky space-y-4 p-4 ">
                            <div className="flex items-center justify-between gap-4 p-4">
                                <FaFilter className="icon icon-outline icon-stroke-3" />
                                <h1 className="font-bold text-slate-800 flex-grow">Filter rewards</h1>
                                <a href="#" className='text-xs text-slate-500'>Reset filters</a>
                            </div>

                            <div className='px-4'>
                                <p className='text-sm'>Coins</p>
                                <div className="relative w-full mt-2  rounded-lg">
                                    <input type="range" name="" id=""  className=' w-full'/>
                                </div>
                               
                            </div>

                            <div className='mt-8 px-4'>
                                <p className='text-sm'>Category</p>
                                <div className='space-y-2 mt-2'>
                                    {
                                    cartegories.map((category) => (
                                        <div key={category} className="bg-slate-200 rounded-2xl h-11 flex items-center space-x-2 px-4">
                                            <input type="checkbox" className="bg-white h-4 w-4" />
                                            <span className="text-gray-700 text-sm">{category}</span>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Content to the right */}
                        <div className='w-full'>
                            {/* Block image */}
                            <div className='bg-white rounded-2xl flex mt-4 md:ml-8 p-6 items-center'>
                                <img src={rewards} alt="rewards" className="w-32 h-32" />
                                <div className='ml-4'>
                                    <h1 className='font-semibold text-slate-900'>Here you can directly exchange Coins for rewards</h1>
                                    <span className='text-xs'>Search through available rewards using filters or use the search engine to find exactly what you are looking for.</span>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="relative w-full md:w-60 text-sm mt-4 md:ml-8">
                                <input type="text" placeholder="What are you looking for ?" className="w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-950" />
                            </div>

                            {/* Payment options */}
                            <div className='grid grid-cols-2 gap-4 mt-4 ml-8'>
                                {
                                    payements.map(payment => (
                                        <a href="#" key={payment.name} className='bg-white rounded-2xl p-4 flex justify-between hover:border-2 hover:border-gray-50 hover:shadow-2xl transition-all'>
                                            <div className='ml-4'>
                                                <p>{payment.name}</p>
                                                <h2 className="text-gray-600 mb-4">
                                                    from {payment.amount}
                                                    <FaDollarSign className="w-6 h-6 inline rounded-full bg-orange-900 text-white text-center p-1 border-2 border-primary" />
                                                    coins
                                                </h2>
                                                <div className='flex flex-wrap text-xs text-slate-700 mt-12 text-center'>
                                                    <div className='bg-slate-200 rounded-3xl p-2 mr-2 flex'>
                                                        <span className=' m-auto'>{payment.type1}</span>
                                                    </div>
                                                    <div className='bg-slate-200 rounded-3xl p-2 flex'>
                                                        <span className=' m-auto'>{payment.type2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-32 h-32">
                                                <img src={payment.image} alt={payment.name} className=" w-full rounded-2xl object-cover" />
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {
                modal && <LoginRegister onClose={ ()=>setModal(false)}/>
            }
        </div>
    );
}

export default Payout;
