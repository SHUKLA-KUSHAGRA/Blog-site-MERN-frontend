import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

function PostCard({props}) {
  const url = props.picturePath;
  return (
    <>
      <Card sx={{ width: 300 , margin : 5 ,height : 450}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.userName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.category}
      />
      <Link to={`/details/${props._id}`}>
        <CardMedia
        component="img"
        height="194"
        image={url}
        alt="Blog-Banner image"
        />
      </Link>
      <Link to={`/details/${props._id}`}>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description.substring(0,20)}...
        </Typography>
      </CardContent>
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
          <p style={{marginLeft : 'auto',color :"text.secondary"}}>Posted By : {props.userName}</p>
      </CardActions>
      <Typography>
        Created Date : {props.createdDate.split('T')[0]}
      </Typography>
    </Card>
    </>
  )
}

export default PostCard;