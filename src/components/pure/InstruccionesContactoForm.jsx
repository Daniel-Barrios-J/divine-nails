import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function InstruccionesContactoForm() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <Typography variant='h6' color="text.secondary" gutterBottom>
          Al llenar el formulario te pediremos los siguientes datos:
        </Typography>

        <Typography variant="h5" component="div">
          {bull}Nombre y apellido
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Es importante indicar al menos un apellido para identificar mejor tu cita
        </Typography>

        <Typography variant="h5" component="div">
          {bull} Telefono de contacto
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          A este numero nos comunicaremos para confirmar tu asistencia a la cita o para aclararte cualquier duda
        </Typography>

        <Typography variant="h5" component="div">
          {bull}Correo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Un correo nos funcionara como respaldo en caso de no poder contactarte, y podremos hacer envio de archivos como facturas y promociones por este medio
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
