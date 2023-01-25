import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomeAboutUs() {
  return (
    <Card sx={{ maxWidth: 400, padding: '0 16px', backgroundColor: '#ffffff' }}>
      <CardContent>
        <Typography sx={{textAlign: 'center'}} gutterBottom variant="h5" component="div">
          Divine Nails
        </Typography>
        <Typography sx={{textAlign: 'center'}} variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles
        </Typography>
      </CardContent>
      <CardMedia sx={{borderRadius: 2}}
        component="img"
        alt="green iguana"
        height="160"
        image="https://i.pinimg.com/originals/77/0b/08/770b08765481da0dafdc262626bbc628.jpg"
      />
      <CardActions sx={{display: 'flex', justifyContent:'space-around', padding: '20px 0'}}>
        <Button size="small" variant='outlined' color='secondary'>Agenda tu cita</Button>
        <Button size="small" variant='outlined' color='secondary'>Contacto</Button>
      </CardActions>
    </Card>
  );
}