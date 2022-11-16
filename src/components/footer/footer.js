import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer p-5 bg-fuchsia-800 text-white text-center">
            <div className="">
                <h3>FEMSBLOG</h3>
                <div className="flex items-center justify-center mt-5">
                    <a href="https://facebook.com/" className="m-5"><FaFacebook /></a>
                    <a href="https://twitter.com/" className="m-5"><FaTwitter /></a>
                    <a href="https://instagram.com/" className="m-5"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;