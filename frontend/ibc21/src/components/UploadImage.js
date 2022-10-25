import react, { useState } from "react";
import Img from "./Img";
import axios from "axios";
import ReportForm from "./ReportForm";
import "../App.css";

const UploadImage = (setNewImage) => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [reports, setReports] = useState("");
  const ShowReportForm = (event) => {
    setIsShown((current) => !current);
  };
  const ShowPhotoForm = (event) => {
    setIsShown((current) => !current);
  };
  const previewFiles = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
    console.log(image);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:4000/", {
        image: image,
      });
      const uploadedImage = result.url;
      console.log(result.data.url);
      setUploadedImage(uploadedImage);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container mt-5 align-items-center justify-content-center">
        <form onSubmit={e=>handleSubmit(e)}>
          <label htmlFor="fileInput">
            </label>
          <input type="file" id="fileInput" onChange={(e) => handleChange(e)} required />
          <button value="Upload" className="btn btn-primary">Upload</button>
        </form>
      </div>
      <ReportForm uploadedImg={uploadedImage} />
      
    
    </>
  );
};
export default UploadImage;