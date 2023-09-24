import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import BlogUpdateModel from "./BlogUpdateModal";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  useEffect(() => {
    fetch("https://blog-server-ifut9xkib-mizanor21.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBlogDelete = (deletedId) => {
    const remainingNotes = blogs.filter((blog) => blog._id !== deletedId);
    setBlogs(remainingNotes);
  };

  return (
    <div className="md:flex justify-center container mx-auto m-10 gap-10">
      <BlogPost></BlogPost>
      <div className="max-w-3xl">
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
