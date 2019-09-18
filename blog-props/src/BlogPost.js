import React from "react"

const BlogPost = props => {
    return (
        <div className="blogPostcontainer">
            <p className="blogTitle">{props.title}</p>
            <p className="blogSubtitle">{props.subtitle}</p>
            <p className="blogAuthor">Posted by {props.author} on {props.date}</p>
            {/* <p className="blogDate">{props.date}</p> */}
        </div>
    )
}

export default BlogPost

