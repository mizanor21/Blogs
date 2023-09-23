import React, { useEffect, useState } from "react";
import Blog from './Blog';
const Blogs = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
  return (
    <div>
        <h1 className='text-3xl'>Blogs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            {
                blogs.map(blog => <Blog key={blog.id} blog= {blog}></Blog>)
            }
          </div>

    </div>
  );
};

export default Blogs;