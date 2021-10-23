import React from "react"
import {Fab, FormControlLabel, Modal, Switch, TextField} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import FileUpload from "./FileUpload"

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  '& .MuiTextField-root': {m: 1},
  boxShadow: 24,
  p: 4,
}

export default function NewPostComponent({onSubmitNewPost}) {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isPhoto, setIsPhoto] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const submitNewPost = () => {
    onSubmitNewPost(title, content, isPhoto)
    handleClose()
  }

  return (
    <div>
      <Fab color="primary" aria-label="add" style={fabStyle} onClick={handleOpen}>
        <AddIcon/>
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={modalStyle}
          noValidate
          autoComplete="off"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new post
          </Typography>
          <FormControlLabel control={<Switch onChange={e => setIsPhoto(e.target.checked)}/>}
                            label="Post a photo"
          />
          <TextField
            required
            id="title"
            label="Post Title"
            fullWidth
            onChange={e => setTitle(e.target.value)}
          />
          {!isPhoto &&
          <TextField
            required
            id="content"
            label="Post Content"
            multiline
            rows={4}
            fullWidth
            onChange={e => setContent(e.target.value)}
          />
          }
          {isPhoto && <FileUpload setContent={setContent}/>}
          <Button variant="contained" onClick={submitNewPost}>Submit</Button>
        </Box>
      </Modal>
    </div>

  )
}