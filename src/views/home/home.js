import HeroSection from "../../components/home/heroSection/heroSection";
import { useContext, useEffect } from "react";
import { BlogsContext } from "../../context/blogsContext";
import HeroBlog from "../../components/home/heroBlog/heroBlog";
import WidgetPanel from "../../components/widgets/widgetsPanel/widgetsPanel";
import SideBarPanel from "../../components/sideBar/sideBarPanel/sideBarPanel";

const Home = () => {
    const {blogs} = useContext(BlogsContext)

    useEffect(() => {
        console.log(blogs)
    }, [blogs])

    return(
        <main className="font-display">
            <HeroSection text={"SHAKESFEM XPACE"} />

            <div className="flex flex-wrap bg-gray-100 p-2">
                <div className="lg:w-[20%] w-full lg:sticky top-2 h-[110%] lg:order-none order-2 p-3 pb-10 bg-white">
                    <SideBarPanel blogs={blogs} />
                </div>

                <div className="flex-1">
                    {
                        blogs && blogs.map(blog => {
                            return (
                                <HeroBlog key={blog.id} blog={blog} />
                            )
                        })
                    }
                </div>

                <div className="lg:w-[25%] w-full lg:sticky lg:h-[120%] top-2 p-3 bg-white">
                    <WidgetPanel blogs={blogs}/>
                </div>
            </div>
            
            <div className="">
                <h1 className="font-bold text-xl p-4 text-center underline underline-offset-4">TRENDING</h1>
            </div>
        </main>
    )
}

export default Home;