import React, {useEffect, useState} from "react"
import PostComponent from "./PostComponent"
import {CircularProgress, CssBaseline, Grid} from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import TopAppBar from "./TopAppBar"
import NewPostComponent from "./NewPostComponent"


export default function Posts({username}) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  const getNewData = () => {
    fetch("https://social-api.m-meidani.workers.dev/posts")
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true)
        setItems(result.data)
      })
      .catch((err) => setError(err))
  }

  const sendTextPost = async (title, content, isPhoto) => {
    const data = {
      username,
      title,
      content,
      content_type: isPhoto? 'image' : 'text'
    }

    let response = await fetch("https://social-api.m-meidani.workers.dev/posts", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    response = await response.json()
    setItems([...items, response.data])
  }

  useEffect(() => {
    getNewData()
  }, [])

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="lg">
        <TopAppBar username={username} />
        <Box sx={{height: '100vh'}}>
          <Grid container spacing={2}>
            {error && <div>Error is: {error}</div>}
            {!isLoaded && <CircularProgress />}
            {isLoaded && items.map(item =>
              <Grid item xs={3} key={item.id}>
                <PostComponent
                  title={item.title}
                  username={item.username}
                  content={item.content}
                  content_type={item.content_type}
                />
              </Grid>
            )}

          </Grid>
          <NewPostComponent
            onSubmitNewPost={sendTextPost}
          />
        </Box>
      </Container>
    </React.Fragment>
  )
}