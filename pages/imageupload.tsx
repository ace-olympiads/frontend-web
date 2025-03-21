import { useState } from "react";
import axiosInstance from "../axios";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    setUploading(true);

    try {
        const response = await axiosInstance.post("/api/getPresignedUrl", {
          fileName: file.name,
          fileType: file.type,
        });
        const { uploadUrl, fileUrl } = response.data;
  
        await axios.put(uploadUrl, file, {
          headers: { "Content-Type": file.type },
        });
  
        setImageUrl(fileUrl);
        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Upload error:", error);
        alert("Upload failed!");
      }

    setUploading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] p-6">
      <h1 className="text-xl font-bold mb-4">Upload an Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={uploadImage}
        disabled={!file || uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="mt-2 w-48 h-48 object-cover border" />
          <p className="text-blue-600 break-all mt-2">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
