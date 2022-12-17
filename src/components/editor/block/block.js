import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const Block = ({ blog, setBlog }) => {
    const modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
      
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]
      

    return (
        <ReactQuill
            theme={"snow"}
            value={blog.content}
            modules={modules}
            formats={formats}
            placeholder={"Write contents here"}
            onChange={(html) => setBlog({...blog, content: html})}
        />
    )
}

export default Block;