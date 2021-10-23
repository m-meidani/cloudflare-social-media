import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {AppBar} from "@mui/material"


export default function TopAppBar({username}) {

  return (
    <Box sx={{ flexGrow: 1 }} style={{marginBottom: '20px'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Hello, {username}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}