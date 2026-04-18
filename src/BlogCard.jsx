import{useContext} from "react";
import{LikeContext} from "./App";  
// import Test from "./Test";
// function blogCard({ title, content, test }) {
function blogCard({ posts }) {
    // console.log(props);
    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="blog-card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Test test={post.body} />
                </div>
            ))}

        </div>
        // <div className="blog-card">
        //     <h2>{title}</h2>
        //     <p>{content}</p>
        //     <Test test={test} />
        // </div>
    )
}

export default blogCard;