import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

const BlogPost = () => {
  const { register, handleSubmit } = useForm();
  const [blogs, setBlogs] = useState([]);

  const onSubmit = (data) => {
    setBlogs([...blogs, data]);
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Blog Added.");
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        <FaPlus />
        New Blog
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Create a new blog</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Title <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                {...register("title")}
                required
                type="text"
                placeholder="Blog title"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Author Name <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                {...register("author")}
                required
                type="text"
                placeholder="Author Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Description <span className="text-red-600">*</span>
                </span>
              </label>
              <textarea
                {...register("description")}
                required
                type="text"
                placeholder="Description"
                className="input input-bordered input-lg w-full min-h-[200px]"
              />
            </div>
            <div className="flex justify-center">
              <input className="btn btn-warning w-44 mt-5" type="submit" />
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default BlogPost;
