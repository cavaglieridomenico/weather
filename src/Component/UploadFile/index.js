import { useState, useEffect } from 'react';
import UploadFileSection from './UploadFileSection';
import { getResult } from '../../assets/scripts/file_utility/file_utility';

const UploadFile = () => {
  const [userFile, setUserFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleInputFile = event => {
    event.preventDefault();
    if (!event.target.files) return;
    setUserFile(event.target.files[0]);
  };

  useEffect(() => {
    if (!userFile) return;
    const handleListFromDatFile = async () => {
      const fileText = await userFile.text();
      setResult(getResult(fileText, 1, 2));
    };
    handleListFromDatFile();
  }, [userFile]);

  return (
    <>
      <UploadFileSection handleInputFile={handleInputFile} result={result} />
    </>
  );
};

export default UploadFile;
