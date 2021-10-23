import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {CardActionArea, CardActions} from '@mui/material'

export default function PostComponent({title, username, content, content_type}) {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardActionArea>
        {content_type === 'image' &&
        <CardMedia
          component="img"
          width="140"
          image={content}
          alt="green iguana"
        />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {content_type === 'text' &&
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          }
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {username}
        </Typography>
      </CardActions>
    </Card>
  );
}