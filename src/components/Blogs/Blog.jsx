import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit } = useForm();

  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const onSubmit = (data) => {
    setComments([...comments, data]);
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Comment Added.");
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  // Split the description into paragraphs by detecting newline characters
  const paragraphs = description.split("\n");

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-serif">{title}</h1>
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
      {/* Render each paragraph with spacing */}
      {paragraphs.map((paragraph, index) => (
        <div key={index} className="my-3 font-serif">
          {paragraph}
        </div>
      ))}
      <hr />
      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center gap-5">
          <div className="form-control w-full">
            <input
              {...register("comment")}
              type="text"
              placeholder="Write a comment..."
              className="input input-bordered input-xs w-full"
            />
          </div>
          <input className="btn btn-warning btn-xs" type="submit" />
        </div>
      </form>
      <hr />
      {comments?.map((comment) => (
        <p className="mt-2" comment={comment}>
          {comment?.comment}
        </p>
      ))}
    </div>
  );
};

export default Blog;
