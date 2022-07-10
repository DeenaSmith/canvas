import React, { useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import Auth from '../utils/auth';
//import { useMutation } from '@apollo/client';
//import { UPLOAD_FILE } from '../utils/mutations';



const Upload = () => {
  const [img, setImg] = useState("http://placehold.it/180")

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    const reader = new FileReader()
    reader.onload = e => {
      setImg(e.target.result)
    }
    reader.readAsDataURL(files[0].file)
    //allFiles.forEach(f => f.remove())
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "auto",
          maxWidth: "300px",
          height:'500px',
          margin: "0 auto",
          float: "none",
          marginBottom: "10px",
          marginTop: "30px",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <div>
              <Dropzone
              inputContent={"Upload files or take photos"}
              inputWithFilesContent={"Add more"}
              submitButtonContent={"Save"}
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={{ dropzone: { minHeight: 150, maxHeight: 150 } }}
              />
            </div>
            <div>
             <img id='image' src={img} alt='preview'/>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Upload;