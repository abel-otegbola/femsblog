export const getPostsContents = (content, i) => {
    return (
        (content[0] === "p") ? <p key={i} className="leading-8 text-justify my-4 first-letter:text-5xl" dangerouslySetInnerHTML={{ __html: content[1]}} /> : 
        (content[0] === "q") ? <p key={i} className="leading-6 text-center my-2 p-[3%] bg-slate-100 italic" dangerouslySetInnerHTML={{ __html: content[1]}} /> :
        (content[0] === "img") ? <img key={i} src={content[1][0]} alt={content[1][1]} className={`w-[${content[1][2]}px] h-[${content[1][3]}px] my-4 pr-2 pb-2`} /> : 
        (content[0] === "li") ? <ul key={i} className="m-4">{content.slice((1)).map((list, index) => { return ( <li key={index} className="list-disc leading-7">{list}</li> ) }) }</ul> : ""
    )
}