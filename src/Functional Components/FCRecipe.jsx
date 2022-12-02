import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Recipe(props) {



  return (
    <div>
      <div style={{ margin:10, padding:10}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <div style={{textAlign:'center'}}>
            {props.name}
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{margin:"0 auto"}}>
          <Button variant="outlined">Prepere dish</Button>
          </div>
        </CardActions>
      </Card>
      </div>
    </div>
  )
}
