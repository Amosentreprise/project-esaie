import { Link } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import logo from "../../src/assets/logo-for-light.svg"
// eslint-disable-next-line react/prop-types
const Nav = ({onClick}) => {
    return ( 
       <nav className="bg-white  py-5 px-3 shadow-lg fixed top-0 right-0 left-0 font-inter z-50">
          <div className=" flex justify-between px-2 items-center">
             <ul className=" flex gap-4">
                <li><Link to="/" className=""><img src={logo} alt="" className=" w-20 h-full" /></Link></li>
                <li><Link to="/" className=" flex items-center text-xl gap-3 transition-all hover:text-primary"> <LuCircleDollarSign/> <span>Home</span></Link></li>
                <li><Link to="/payout" className=" flex items-center text-xl gap-3 transition-all hover:text-primary"> <AiOutlineGift/>  <span>Payout</span></Link></li>
             </ul>

             <ul className="flex gap-4">
                <li className=" flex items-center text-2xl hover:text-primary transition-all"><span><AiOutlineDribbble/></span></li>
                <li onClick={onClick} className=" flex items-center text-2xl hover:text-primary transition-all"><span><AiOutlineUser/></span></li>
             </ul>
          </div>
       </nav>
     );
}
 
export default Nav;