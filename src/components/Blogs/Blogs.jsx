import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
const Blogs = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 container mx-auto">
        <div className="flex justify-center items-center">
          <BlogPost></BlogPost>
        </div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
