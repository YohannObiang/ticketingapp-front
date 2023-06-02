import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Statsglobale from './Statsglobale';
import Transactions from './Transactions';
import Qrcode from './Qrcode';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard({logoff, URL, UserTickets, Ctitket}) {
  const [open, setOpen] = React.useState(false);
  var idCat= UserTickets[0]
  


  function getStepContent(step) {
    switch (step) {
      case 2:
        return  <Statsglobale
        events={UserTickets}
        Ctitket={Ctitket}
        URL = {URL}
        />
      case 1:
        return  <Transactions/>;
      case 0:
        return <Qrcode
    URL={URL}
    events={UserTickets}
        
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);


    

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          </Toolbar>
          <Divider />
          <List component="nav">
          <React.Fragment>
          <ListItemButton onClick={()=>{setActiveStep(0)}}>
              <ListItemIcon>
                <QrCodeScannerIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton> 
            <ListItemButton onClick={()=>{setActiveStep(2)}}>
              <ListItemIcon>
                <CurrencyExchangeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={()=>{setActiveStep(1)}}>
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
      </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListItemButton onClick={logoff}>
                <ListItemIcon>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary="Se déconnecter"  />
              </ListItemButton>

            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            width: '100vw',
            overflow: 'auto',
          }}
        >
          {getStepContent(activeStep)}
        </Box>

      </Box>
    </ThemeProvider>
  );
}
