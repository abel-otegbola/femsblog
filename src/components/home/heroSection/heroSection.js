import bg from "../../../img/bg2.jpg";

const HeroSection = () => {

    return (
        <div className=" flex items-center justify-center text-white m-2 mt-0 relative h-[200px]">
            <img src={bg} alt="bg" className="absolute top-0 left-0 w-full rounded h-full object-cover " />
            <p className="text-3xl relative font-bold p-4 px-6 bg-black/[0.1] text-black text-center">SHAKESFEM XPACE</p>
        </div>
    )
}

export default HeroSection;