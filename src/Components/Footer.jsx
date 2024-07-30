import { FaGooglePlay, FaFacebook, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <footer>
            <div className="flex flex-col md:flex-row justify-around items-center bg-white mt-24 rounded-lg p-4">
                <div className="bg-slate-100 w-full md:w-[400px] h-[120px] rounded-2xl shadow text-center mb-4 md:mb-0">
                <div className="stats__heading text-2xl font-bold text-gray-800 mt-9">568,362</div>
                <span className="stats__subheading text-gray-600">Registered users</span>
                </div>
                <div className="stats__box bg-slate-100 w-full md:w-[400px] h-[120px] rounded-2xl shadow text-center mb-4 md:mb-0">
                <div className="stats__heading text-2xl font-bold text-gray-800 mt-9">$392,822.46</div>
                <span className="stats__subheading text-gray-600">Paid out to users</span>
                </div>
                <div className="stats__box bg-slate-100 w-full md:w-[400px] h-[120px] rounded-2xl shadow text-center">
                <div className="stats__heading text-2xl font-bold text-gray-800 mt-9">57</div>
                <span className="stats__subheading text-gray-600">Users online</span>
                </div>
            </div>

            <div className="footer bg-white text-black p-6 flex flex-col md:flex-row justify-between mt-24">
                <div className="legal mb-4 md:mb-0 text-xs">
                <div className="legal__copyright">Copyright © Earnweb | Made with ❤ in Poland</div>
                <div className="legal__version mt-2">Version <strong>2.16.2</strong></div>
                <div className="legal__links flex space-x-4 text-xs mt-2">
                    <u><a className="link text-black" href="/legal/gdpr" target="_self">GDPR</a></u>
                    <u><a className="link text-black" href="/legal/privacy-policy" target="_self">Privacy policy</a></u>
                    <u><a className="link text-black" href="/legal/terms" target="_self">Terms of service</a></u>
                </div>
                </div>
                <div className="social flex flex-col md:flex-row justify-center items-center mb-5">
                <div className="social__icons flex space-x-4 mb-4 mr-4 md:mb-0">
                    <a href="https://play.google.com/store/apps/details?id=com.earn.money.make.online.cash.quick.earnweb&amp;referrer=utm_source%3Dearnweb.com%26utm_medium%3Dfooter" target="_blank" rel="noopener noreferrer">
                    <FaGooglePlay className="text-slate-500 w-4 h-4 hover:text-gray-400" />
                    </a>
                    <a href="https://www.facebook.com/earnwebcom" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-slate-500 w-4 h-4 hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com/EarnwebOfficial" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-slate-500 w-4 h-4 hover:text-gray-400" />
                    </a>
                    <a href="https://www.youtube.com/@earnweb_com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-slate-500 w-4 h-4 hover:text-gray-400" />
                    </a>
                </div>
                <div className="discord flex items-center space-x-2 bg-slate-100 w-full md:w-[350px] h-[100px] rounded-2xl mt-4 md:mt-0">
                    <FaDiscord className="text-indigo-700 w-10 h-10 ml-4 hover:text-gray-400" />
                    <div className="discord__content text-black">
                    <div className="discord__description text-xs font-semibold text-slate-700">OUR CHANNEL</div>
                    <u><a className="link text-black" href="https://discord.gg/EAmMBt5ZPn" target="_blank" rel="noreferrer nofollow">discord.gg/EAmMBt5ZPn</a></u>
                    </div>
                    <a href="https://discord.gg/EAmMBt5ZPn" target="_blank" rel="noopener noreferrer" className="btn bg-white text-black px-4 py-2 rounded-3xl hover:bg-slate-200">
                    Join
                    </a>
                </div>
                </div>
            </div>
            
        </footer>
     );
}
 
export default Footer;