import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ServiceCard({service, size = 'small'}) {
  return (
    <Card sx={{ width: size==='large' ? 360 : 160 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={size==='large' ? 240 : 160}
          image="https://banein.com/wp-content/uploads/2021/05/Servicio-Unas-y-Decoracion.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button size="small" color="primary">
          Agendar cita
        </Button>
      </CardActions>
    </Card>
  );
}