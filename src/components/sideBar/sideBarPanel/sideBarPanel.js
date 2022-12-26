import SideBarLink from "../sideBarLinks/sideBarLinks";
import Tags from "../../widgets/tags/tags";
import { useEffect, useState } from "react";

const SideBarPanel = ({ blogs }) => {
    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        blogs.forEach((blog) => {
            if(categories.indexOf(blog.category) < 0) {
                setCategories([...categories, blog.category])
            }
        })
    }, [blogs, categories])

    useEffect(() => {
        for(let i=0; i<blogs.length; i++) {
            blogs[i].tags.forEach((tag) => {
                if(tags.indexOf(tag) < 0) {
                   setTags([...tags, tag])
                }
            })
        };
    }, [blogs, tags])


    return (
        <div>
        <h1 className="font-bold text-md p-2 bg-slate-100">CATEGORIES</h1>
            {
                categories.map((link, i) => {
                    return (
                        <SideBarLink key={i} link={link} />
                    )
                })
            }
        
        <Tags tags={tags} />
        </div>
    )
}

export default SideBarPanel;