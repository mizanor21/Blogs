import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const BlogUpdateModel = ({ selectedBlog }) => {
  const { _id, title, author, description } = selectedBlog;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Data Updated, Reload UI.");
        console.log(data); // Data returned from the server
      })
      .catch((error) => {
        toast.error("Error:", error);
      });
  };

  return (
    <div>
      <input type="checkbox" id="note-modal" className="modal-toggle" />
      <label htmlFor="note-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Update blog</h3>
          <form
            className="bg-white p-10"
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Title <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register("title")}
                type="name"
                defaultValue={title}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Author <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register("author")}
                type="text"
                defaultValue={author}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Description <span className="text-red-500">*</span>
                </span>
              </label>
              <textarea
                {...register("description")}
                required
                type="text"
                defaultValue={description}
                placeholder="Enter your message here..."
                className="input input-bordered w-full min-h-[100px] lg:min-h-[200px]"
              />
            </div>
            <input
              className="btn btn-black w-full mt-5 mb-3"
              type="submit"
              value="Update Blog"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default BlogUpdateModel;
