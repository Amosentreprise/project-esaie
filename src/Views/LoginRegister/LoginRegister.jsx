import { IoCloseSharp } from "react-icons/io5";
import auth from "../../assets/auth-img-light.png"
import { FaDollarSign } from "react-icons/fa";
               
// eslint-disable-next-line react/prop-types
const LoginRegister = ({onClose}) => {
    return ( 
        <div className=" fixed z-50 inset-0 bg-secondary">
            <div className="bg-white">
                <div className="flex justify-between p-2">
                    <p></p>
                    <button onClick={onClose} className=" w-8 h-8 flex bg-primary rounded-full"><IoCloseSharp className=" text-2xl text-white m-auto font-bold"/></button>
                </div>

                <div className=" flex justify-between px-3">
                    <div>
                        <img src={auth} alt="" />
                    </div>
                    <div className="w-[400px] h-[400px] bg-white shadow-xl rounded-2xl p-4">
                        <form action="">
                            <h2 className=" text-neutral-900 text-2xl font-bold">Register</h2>
                            <p className=" text-accent">And choose your first reward</p>
                        </form>

                    </div>
                    <div className="w-[300px] h-[400px] bg-secondary shadow-xl rounded-2xl relative top-10 p-4">
                        <form action="">
                            <h2 className=" text-neutral-900 text-2xl font-bold">Login</h2>
                            <p className=" text-accent">Earn <FaDollarSign className="w-8 h-8 inline rounded-full  bg-orange-900 text-white text-center p-1 border-2 border-primary"/> with easy tasks</p>
                        </form>

                    </div>
                    
                </div>
            </div>
            

        </div>
     );
}
 
export default LoginRegister;