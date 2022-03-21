import { useState, useEffect } from 'react';
import UploadFileSection from './UploadFileSection';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  useEffect(() => {
    console.log(file);
  }, [file]);
  const handleInputFile = event => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submit');
  };
  return (
    <>
      <UploadFileSection
        handleInputFile={handleInputFile}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default UploadFile;
