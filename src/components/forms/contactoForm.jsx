import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


export default function contactoForm() {
  return (
    <Card sx={{ width: 360, display: 'grid', placeContent: 'center', padding: '24px 0 12px 0' }}>
      <Typography variant='h5' sx={{textAlign: 'center'}}>
        Contactanos!
      </Typography>
      <CardContent sx={{display: 'grid', gap:'24px', width: '350px'}}>
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField id="outlined-basic" label="Correo (opcional)" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={4}
        />
      </CardContent>
      <CardActions>
        <Button size="large">Enviar datos</Button>
      </CardActions>
    </Card>
  );
}