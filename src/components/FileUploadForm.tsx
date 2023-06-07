import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadFormProps {
  onFileUpload: (data: any) => void; // Adjust the type of 'data' according to your JSON structure
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
    const reader = new FileReader();
    reader.onload = () => {
      const jsonData = reader.result as string;
      const parsedData = JSON.parse(jsonData);
      onFileUpload(parsedData);
    };
    reader.readAsText(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the file here...</p> : <p>Drag and drop a JSON file here, or click to select a file</p>}
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUploadForm;
