import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const Blog = ({ blog }) => {
  const { title, author, description } = blog;
  return (
    <div className="border">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex gap-5">
          <FaEdit />
          <FaTrash />
        </div>
      </div>
      <small>{author}</small>
      <p>{description}</p>
    </div>
  );
};

export default Blog;
