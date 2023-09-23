import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import BlogUpdateModel from "./BlogUpdateModal";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBlogDelete = (deletedId) => {
    const remainingNotes = blogs.filter((blog) => blog._id !== deletedId);
    setBlogs(remainingNotes);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 container mx-auto">
        <div className="flex justify-center items-center">
          <BlogPost></BlogPost>
        </div>
        {blogs?.map((blog) => (
          <Blog
            key={blog?._id}
            blog={blog}
            setSelectedBlog={setSelectedBlog}
            handleBlogDelete={handleBlogDelete}
          ></Blog>
        ))}
        {selectedBlog && (
          <BlogUpdateModel selectedBlog={selectedBlog}></BlogUpdateModel>
        )}
      </div>
    </div>
  );
};

export default Blogs;
