import { useState , useRef, useEffect} from "react";


export default function Blog(){

    // const [title, setTitle] = useState("");


    // const [content, setContent] = useState("");

    const [formData, setFormData] = useState({title : "", content: ""});

    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);
    console.log("tileref", titleRef);

    useEffect(() => {
        titleRef.current.focus();
    }, [])


    useEffect(() => {
        console.log("ooo");
        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
            
        }else{
            document.title= "no blogs";
        }

        
    }, [blogs])




    function handleSubmit(e){
        e.preventDefault();
        setBlogs([{title : formData.title, content : formData.content}, ...blogs]);
        console.log("blogs", blogs);
        // setTitle("");
        // setContent("");
        setFormData({title : "", content : ""});
        // console.log("cu", titleRef.current);
        titleRef.current.focus();
        // console.log("val", titleRef.current.value);

        

    }

    function removeBlog(i) {
        setBlogs(blogs.filter((blog, index) => i!== index));
    }

    return (
        
        <>

        <h1>Write a Blog!</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                    <input 
                    required
                    ref={titleRef}
                    value={formData.title} className="input" placeholder="Enter the title here.."
                    onChange={(e) => setFormData({title : e.target.value, content : formData.content})} />

                </Row>
                <Row label="Content">
                    <textarea  
                    required
                    onChange={(e) => setFormData({title : formData.title, content : e.target.value})}
                    value={formData.content} className="input content" placeholder="Content goes here..." />
                    
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
                    <div className="blog-btn">
                        <button onClick={() => removeBlog(i)} className="btn remove">
                            Delete
                        </button>
                    </div>
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