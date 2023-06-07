import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Orders from './Orders';
import Paper from '@mui/material/Paper';


const Transactions = ({Userlogged}) => {
    return ( 
        <Container maxWidth="lg" sx={{ mt:4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders
                  Userlogged={Userlogged}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
     );
}
 
export default Transactions;