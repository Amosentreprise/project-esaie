import { useState } from "react";
import Nav from "../../Components/Nav";
import Banner from "./HomeSections/Banner";
import HowWork from "./HomeSections/HowWork";
import PopularRewards from "./HomeSections/PopularRewards";
import LoginRegister from "../LoginRegister/LoginRegister";
import Footer from "../../Components/Footer";

const Home = () => {
    const [modal, setModal] = useState(false);
    function handleClick (){
     setModal(true);
    }
    return ( 
        <div className=" relative">
            <Nav onClick={handleClick}/>
            <Banner/>
            <PopularRewards/>
            <HowWork/>
            <Footer/>

            {
                modal && <LoginRegister onClose={ ()=>setModal(false)}/>
            }
        </div>
     );
}
 
export default Home;