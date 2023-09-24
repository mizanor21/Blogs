import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogList = () => {
  const blogs = useLoaderData();
  return (
    <div className="container mx-auto my-10 min-h-screen">
      <h1 className="text-3xl mb-5">Blog List</h1>
      {blogs?.map((blog) => (
        <li className="font-serif font-bold" key={blog?._id} blog={blog}>
          {blog?.title}
        </li>
      ))}
    </div>
  );
};

export default BlogList;
