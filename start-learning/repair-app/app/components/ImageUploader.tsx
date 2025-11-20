// components/ImageUploader.js
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader({ pictures, setPictures }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // รวมไฟล์ใหม่กับไฟล์เดิม
      const newFiles = [...pictures, ...acceptedFiles];

      // จำกัดสูงสุด 5 รูป
      if (newFiles.length > 5) {
        alert("อัพโหลดได้สูงสุด 5 รูปเท่านั้น");
        return;
      }

      setPictures(newFiles);
    },
    [pictures, setPictures]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // รับเฉพาะรูป
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`p-6 border-2 border-dashed rounded-md cursor-pointer ${
        isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ปล่อยไฟล์ที่นี่...</p>
      ) : (
        <p className="text-center">Upload pictures</p>
      )}

      {/* Preview */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        {pictures.map((file, idx) => (
          <div key={idx} className="border rounded p-1">
            <img
              src={URL.createObjectURL(file)}
              alt={`preview-${idx}`}
              className="w-full h-24 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
