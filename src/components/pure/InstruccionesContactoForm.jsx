import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material';

const CustomCard = styled(Card)`
  @media all and (max-width: 640px) {
    display: none;
  }
`

export default function InstruccionesContactoForm() {
  return (
    <CustomCard id='card' sx={{ minWidth: 275, maxWidth: 360 }}>
      <CardContent>
        <Typography variant='h6' color="text.secondary" gutterBottom>
          Al llenar el formulario te pediremos los siguientes datos:
        </Typography>

        <Typography variant="h5" component="div">
          Nombre y apellido
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Es importante indicar al menos un apellido para identificar mejor tu cita
        </Typography>

        <Typography variant="h5" component="div">
           Telefono de contacto
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          A este numero nos comunicaremos para confirmar tu asistencia a la cita o para aclararte cualquier duda
        </Typography>

        <Typography variant="h5" component="div">
          Correo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Un correo nos funcionara como respaldo en caso de no poder contactarte, y podremos hacer envio de archivos como facturas y promociones por este medio
        </Typography>
      </CardContent>
    </CustomCard>
  );
}
