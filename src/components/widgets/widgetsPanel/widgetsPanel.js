// import { useEffect, useState } from "react";
import SavedBlogs from "../savedBlogs/savedBlogs";


const WidgetPanel = ({ blogs }) => {
    const savedBlogs = blogs.filter(blog => blog.liked === true).splice(0, 4);
    // const [viewedIds, setViewedIds] = useState([])
    // const [recentlyViewed, setRecentlyViewed] = useState([])


    // useEffect(() => {
    //     setViewedIds([2, 1, 4])
    // }, [setViewedIds])

    // useEffect(() => {
    //     let arr = viewedIds.map(id => {
    //         return (
    //             blogs.filter(blog => blog.id === id)
    //         )
    //     })
    //     setRecentlyViewed([].concat(arr.map(item => { return item[0] })))

    // }, [setRecentlyViewed, viewedIds, blogs])

    return (
        <div>
            <SavedBlogs blogs={savedBlogs}/>
            <button className="px-4 py-2 bg-fuchsia-600 text-white rounded my-2 hover:bg-fuchsia-700">
                <a href="/saved">View all</a>
            </button>
            {/* <RecentlyViewed blogs={recentlyViewed} /> */}
        </div>
    )
}

export default WidgetPanel;