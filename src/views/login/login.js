import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import HeroSection from "../../components/home/heroSection/heroSection"

const Login  = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="">
            <HeroSection text={"LOGIN"} />
            <form className="sm:w-[450px] m-auto mt-10 mb-40 border border-gray-100 rounded p-4 w-full">
                <p className="text-center font-bold p-4 mb-10">Enter your correct details to login</p>
                <label htmlFor="email" className="w-full">
                    <p>Email:</p>
                    <input id="email" name="email" type="email" required 
                        className="mt-2 mb-8 w-full p-2 border border-gray-300 outline outline-fuchsia-100 focus:border-fuchsia-500" 
                    />
                </label>
                <label htmlFor="password" className="w-full">
                    <p>Password:</p>
                    <div className="flex w-full items-center mt-2 mb-8 bg-slate-200">
                        <input id="password" name="password" type={showPassword ? "text" : "password"} required 
                            className="w-full p-2 border border-gray-300 outline outline-fuchsia-100 focus:border-fuchsia-500" 
                        />
                        <span className="p-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{ showPassword ? <FaEyeSlash /> :<FaEye /> }</span>
                    </div>
                </label>
                <button className="p-3 rounded bg-fuchsia-600 text-white w-full hover:bg-fuchsia-700 hover:outline hover:outline-fuchsia-300">Login</button>

                <div className="flex items-center justify-between mt-8 p-2">
                    <p>Don't have an account yet? <a href="/signup" className="text-fuchsia-600">Sign up</a></p>
                    <a href="/forgot-password" className="text-fuchsia-600">Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default Login