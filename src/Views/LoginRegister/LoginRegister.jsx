import { IoCloseSharp } from "react-icons/io5";
               
// eslint-disable-next-line react/prop-types
const LoginRegister = ({onClose}) => {
    return ( 
        <div className="fixed z-50 inset-0 bg-secondary pr-2">
            <div className=" h-full bg-white">
                <div className="flex justify-between p-2">
                    <p></p>
                    <button onClick={onClose} className=" w-8 h-8 flex bg-primary rounded-full"><IoCloseSharp className=" text-2xl text-white m-auto font-bold"/></button>
                </div>
            </div>
            

        </div>
     );
}
 
export default LoginRegister;