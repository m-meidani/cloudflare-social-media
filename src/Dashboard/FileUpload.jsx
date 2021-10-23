import React from 'react'
import Button from "@mui/material/Button"

export default function FileUpload({setContent}) {

  const handleInputChange = event => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setContent(e.target.result)
    }
  }

  return (
    <div style={{marginBottom: '5px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file"
              hidden
              onChange={handleInputChange}
            />
          </Button>

        </div>
      </div>
    </div>
  )
}