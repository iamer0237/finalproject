import react, { useState } from "react";
import Img from "./Img";
import axios from "axios";
import "../App.css";

const CloudApp = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(image)
    try {
      const result = await axios.post("http://localhost:4000/", {
        image: image,
      });
      console.log(result)
      const uploadedImage = result.data.public_id;
      setUploadedImage(uploadedImage);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mt-5 align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fileInput">Upload</label>
          <input
            type="file"
            id="fileInput"
            onClick={(e) => handleChange(e)}
            required
            accept="image/png, image/jpeg, image/jpg /image/jfif"
          />
          <button className="btn btn-primary"></button>
        </form>
      </div>
      <img src={image} alt="" />
      <Img uploadedImg={uploadedImage} />
    </>
  );
};
export default CloudApp;
