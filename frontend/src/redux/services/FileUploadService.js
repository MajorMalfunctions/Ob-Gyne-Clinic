const API_URL = "http://localhost:5050/api/auth/"
import axios from "../../utils/axios";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return baseURL.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return baseURL.get("/files");
};

export default {
  upload,
  getFiles,
};