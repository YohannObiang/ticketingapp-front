import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Orders from './Orders';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {

      main: '#6d1493',

    },
    secondary: {

      main: '#6d1493',
      
    },
  },
});

const Transactions = ({Userlogged, Retraits}) => {




    return ( 
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg" sx={{ mt:4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{fontWeight: 600, color: "#6d1493"}}>Solde actuel: {Userlogged.solde}fcfa</h2>
                  <Button variant="contained">
                    Retrait
                  </Button>
              </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders
                  Retraits={Retraits}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </ThemeProvider>
     );
}
 
export default Transactions;