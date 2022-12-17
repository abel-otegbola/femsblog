import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer p-[3%] bg-gray-800 text-white">
            <div className="flex justify-between flex-wrap">
                <div className="md:w-[35% w-full] mr-[5%] pt-8">
                    <h3 className="text-xl font-bold">FEMSBLOG</h3>
                    <p className="my-3">The only place regarded as the island of kowledge.</p>
                    <div className="flex bg-white items-center p-[1px] rounded">
                        <input type="email" className="p-3 flex-1 text-gray-800" placeholder="Subscribe to our newsletter..." />
                        <button className="p-3 mr-1 rounded bg-gray-800 hover:bg-fuchsia-600 text-white"><FaTelegramPlane /></button>
                    </div>
                </div>

                <div className="md:w-[25%] w-full pt-8">
                    <h2 className="font-semibold pb-3">CATEGORIES</h2>
                    <ul>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/categories/Entertainment">Entertainment</a></li>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/categories/Music">Music</a></li>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/categories/Philosophy">Philosophy</a></li>
                        <button className="py-2 text-fuchsia-600">view more</button>
                    </ul>
                </div>

                <div className="md:w-[25%] w-full pt-8">
                    <h2 className="font-semibold pb-3">POSTS</h2>
                    <ul>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/post/How-to-code-using-javascript">How to code using javascript</a></li>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/post/Best-selling-videos-of-2022">Best selling videos of 2022</a></li>
                        <li className="py-1 flex"><a className="py-1 w-full" href="/post/coming-of-age-advancement-in-technology">Coming of age advancement in technology</a></li>
                        <button className="py-2 text-fuchsia-600">view more</button>
                    </ul>
                </div>
                <div className="md:w-[10%] w-full pt-8">
                    <h2 className="font-semibold pb-3">SOCIALS</h2>
                    <div className="flex items-start mt-5 text-gray-800">
                        <a href="https://facebook.com/" className="mr-3 p-2 rounded bg-white"><FaFacebook /></a>
                        <a href="https://twitter.com/" className="mr-3 p-2 rounded bg-white"><FaTwitter /></a>
                        <a href="https://instagram.com/" className="mr-3 p-2 rounded bg-white"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;