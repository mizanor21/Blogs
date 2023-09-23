import React from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
const Blog = ({ blog, handleBlogDelete, setSelectedBlog }) => {
  const { _id, title, author, description } = blog;

  const handleDelete = () => {
    const agree = window.confirm(`Are you sure you want to delete?`);
    if (agree) {
      fetch(`http://localhost:5000/blog/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            toast.success("Successfully deleted blog.");
            handleBlogDelete(_id); // Call the onDelete function provided by the parent
          } else {
            toast.error("No documents matched the query.");
          }
        });
    }
  };

  return (
    <div className="border">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex gap-5">
          <label
            onClick={() => setSelectedBlog(blog)}
            htmlFor="note-modal"
            className="cursor-pointer"
          >
            <FaEdit></FaEdit>
          </label>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </div>
      <small>{author}</small>
      <p>{description}</p>
    </div>
  );
};

export default Blog;
