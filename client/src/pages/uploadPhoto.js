import React from 'react';
import {useDropzone} from 'react-dropzone';
import Box from '@mui/material/Box'

function AcceptMaxFiles(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:5
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  

  return (
    <section className="container" >
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div> 
          <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'grey',
              opacity: [0.9, 0.8, 0.7],}}}
          >
            Upload your images here!
          </Box>
        </div>
        <em>(5 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default AcceptMaxFiles