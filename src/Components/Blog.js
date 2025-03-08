import { useState } from "react";


export default function Blog(){

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const [blogs, setBlogs] = useState([]);



    function handleSubmit(e){
        e.preventDefault();
        setBlogs([{title, content}, ...blogs]);
        console.log("blogs", blogs);
        setTitle("");
        setContent("");
    }

    return (
        <>

        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                    <input value={title} className="input" placeholder="Enter the title here.."
                    onChange={(e) => setTitle(e.target.value)} />

                </Row>
                <Row label="Content">
                    <textarea  
                    onChange={(e) => setContent(e.target.value)}
                    value={content} className="input content" placeholder="Content goes here..." />
                    
                </Row>
                <button className="btn">ADD</button>
            </form>
        </div>
        <hr />
        <h2>Blogs</h2>
        {/* <h3>{title}</h3>
        <p>{content}</p> */}
        {blogs.map((blog, i) => {
            return (
                <div className="blog" key={i}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            )
        })}
        </>
    )
}

function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}