import { useContext, useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BlogsContext } from "../../context/blogsContext";
import Search from "../search/search";

const Topbar = () => {
  const active = useLocation().pathname;
  const [toggle, setToggle] = useState(false);
  const [catToggle, setCatToggle] = useState(false);
  const [categories, setCategories] = useState([])
  const { blogs } = useContext(BlogsContext)

  
  useEffect(() => {
    blogs.forEach((blog) => {
        if(categories.indexOf(blog.category) < 0) {
            setCategories([...categories, blog.category])
        }
    })
  }, [blogs, categories])


  return (
    <div className="flex justify-between items-center relative px-[3%] md:py-0 py-3 shadow">
      <div className="flex items-center w-[18%]">
        <h3 className="font-heading md:text-xl text-[18px] text-fuchsia-600 font-semibold">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="30" viewBox="0 0 296.024 178.217">
              <defs>
                <linearGradient id="linear-gradient" x1="0.151" y1="0.313" x2="0.914" y2="0.313" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#b746ee"/>
                  <stop offset="0.23" stop-color="#d95fef"/>
                  <stop offset="0.28" stop-color="#7f0eae"/>
                  <stop offset="0.473" stop-color="#b646e1"/>
                  <stop offset="0.632" stop-color="#8817b6"/>
                  <stop offset="0.807" stop-color="#d35bef"/>
                  <stop offset="1" stop-color="#d35bef"/>
                </linearGradient>
              </defs>
              <path id="eagle" d="M110.573,13.75,77.95,39.5,62.347,7.646,43.925,37.5,10.083,13.75-85.462,37.5,97.573,150.733,62.351,184.138,27.5,150.733,208.025,37.5,111.573,13.75" transform="translate(86.734 -6.612)" stroke="#707070" stroke-width="1" fill="url(#linear-gradient)"/>
            </svg>
          </a>
        </h3>
      </div>
      <nav
        className={`md:relative md:block md:w-auto md:p-0 md:h-auto md:shadow-none absolute flex ${
          toggle ? "w-[75%]" : "w-0 p-0"
        } md:overflow-visible overflow-hidden h-screen shadow-lg top-0 right-0 bg-white z-10 transition-all duration-700`}
      >
        <ul className="md:flex items-center text-gray-800 font-semibold md:w-auto w-full">
          {["", "Categories", "Bookmarks"].map((link, index) => {
            return (
              <li key={index} className="md:p-0 p-[18px] flex md:auto w-full border border-gray-50 border-b-gray-200 md:border-none">
                <div
                  className={`md:p-2 md:py-5 w-full mx-3 flex justify-between items-center relative ${
                    active === link ? "text-fuchsia-500" : ""
                  }`}
                >
                  <a 
                  href={`/${link}`}
                  className="hover:text-fuchsia-500">
                    {link === "" ? "Home" : link}
                  </a>
                  {link === "Categories" ? (
                    <div>
                      <FaChevronDown
                        className="ml-2 hover:text-fuchsia-500 w-[10px]"
                        onClick={(e) => {
                          e.preventDefault();
                          setCatToggle(!catToggle);
                        }}
                      />
                      <ul
                        className={`${
                          catToggle ? "block" : "hidden"
                        } absolute bg-white top-[100%] min-w-[200px] right-0 p-2 rounded shadow-lg z-50`}
                      >
                        {categories.map(
                          (category, i) => {
                            return (
                              <li key={i} className="flex w-full border border-gray-50 border-t-gray-200 border-b-gray-200 p-[6px] pr-[30px]">
                                <a
                                  href={`/categories/${category}`}
                                  className="w-full mx-2 p-[6px] hover:text-fuchsia-500 "
                                >
                                  {category}
                                </a>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center">
        <Search />
        <button
          className="md:hidden bg-gray-50 border border-gray-100 p-3 z-50 relative ml-1 rounded"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
