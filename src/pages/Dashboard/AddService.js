import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api/axios.config";

const AddService = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageURL,
    };
    const res = await fetcher.post("/add-service", serviceData);
    reset();
    setImageURL("");
    console.log(res);
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, formData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex bg-accent h-screen w-full justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h3 className="text-center text-2xl">Add Service</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="serviceName" className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                id="serviceName"
                placeholder="Enter service name"
                className="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="serviceCharge" className="label">
                <span className="label-text">Service Charge</span>
              </label>
              <input
                type="text"
                id="serviceCharge"
                placeholder="Enter service charge"
                className="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="serviceImage"
                className={
                  loading
                    ? "btn btn-secondary loading"
                    : "btn btn-secondary mt-5"
                }
              >
                Upload Image
              </label>
              <input
                type="file"
                id="serviceImage"
                placeholder="Enter image url"
                className="input input-bordered hidden"
                onChange={handleUploadImage}
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!imageURL ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
