import HeroSection from "../../components/home/heroSection/heroSection";
import { useContext } from "react";
import { BlogsContext } from "../../context/blogsContext";
import HeroBlog from "../../components/home/heroBlog/heroBlog";
import WidgetPanel from "../../components/widgets/widgetsPanel/widgetsPanel";
import SideBarPanel from "../../components/sideBar/sideBarPanel/sideBarPanel";

const Home = () => {
    const {blogs} = useContext(BlogsContext)

    return(
        <main className="font-display">
            <HeroSection />

            <div className="flex flex-wrap bg-gray-100 p-2">
                <div className="md:w-[20%] w-full p-3 bg-white">
                    <SideBarPanel />
                </div>

                <div className="md:w-[55%] w-full">
                    <h1 className="font-bold text-xl p-4 text-center underline underline-offset-4">TRENDING</h1>
                    {
                        blogs.map(blog => {
                            return (
                                <HeroBlog key={blog.id} blog={blog} />
                            )
                        })
                    }
                </div>

                <div className="md:w-[25%] w-full p-3 bg-white">
                    <WidgetPanel blogs={blogs}/>
                </div>
            </div>
            
        </main>
    )
}

export default Home;