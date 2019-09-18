import React from "react"
import BlogPost from "./BlogPost"

const BlogList = props => {
    const {blogs} = props

    const mappedBlogs = blogs.map(blog =>
        <BlogPost
            title={blog.title} 
            subtitle={blog.subTitle} 
            author={blog.author} 
            date={blog.date}
            key={Math.random} /> 

        )

    return (
        <div>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
          {mappedBlogs}
          <p className="olderPosts">OLDER POSTS &rarr; </p>
        </div>
    )
}

export default BlogList