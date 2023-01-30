import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TableCell, Table, TableRow } from '@mui/material';
import Button from "@mui/material/Button";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const options = ['option1', 'option2'];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "white",
        color: "black"
      }}>
        <Toolbar sx={{
          border: 1,
          borderColor: 'warning.main'
        }}>
          <Typography variant="h6" >
            Kathiravan Tex
          </Typography>
          <Typography variant='h6' sx={{
            marginLeft: 12,
            cursor: "pointer"

          }} >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

          <Divider />
          <Divider />
          <List>
            {['Category Manager', 'Inventory', 'Orders', 'catalog Uploads', 'Payments', 'promotions'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>

                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Typography sx={{
            ml:2,mt:30, 
          }}>
            Settings
          </Typography>
        </Box>
      </Drawer>
      <Box component="main" sx={{
        flexGrow: 1, pl: 8, pt: 4,
        paddingRight: "2%",
        display: 'grid',

      }}>
        <Toolbar />
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          Welcome to Gokulam Store
        </Typography>
        <Typography paragraph>
          By Entering below details you can create new Business
        </Typography>

        <Typography variant='subtitle2'>
          (1)  Select Category
          (2)  Add product Details
        </Typography> <br />

        <Table>
          <TableRow>
            <TableCell>
              <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}>
                Category
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                options={options}
                sx={{ width: 300, bgcolor: "whitesmoke" }}
                renderInput={(params) => <TextField {...params} label="Choose Category" />}
              />



            </TableCell>
            <TableCell>
              <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}>
                Description
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                options={options}
                sx={{ width: 300, bgcolor: "whitesmoke" }}
                renderInput={(params) => <TextField {...params} label="type anything" />}
              />
            </TableCell>
            <TableCell>
          <Button sx={{background:"#00CED1",color:"white",borderRadius:"50%",width:"10px",height:"55px"}}>+</Button>
          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}>
                Sub Cateogory
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                options={options}
                sx={{ width: 300, bgcolor: "whitesmoke" }}
                renderInput={(params) => <TextField {...params} label="Choose Sub Cateogory" />}
              />
            </TableCell>
            <TableCell>

            <Typography variant='subtitle' sx={{ fontWeight: 'bold' }}>
          Description
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          size="small"
          options={options}
          sx={{ width: 300, bgcolor: "whitesmoke" }}
          renderInput={(params) => <TextField {...params} label="type anything" />}
        />
            </TableCell>
            
          <TableCell>
          <Button sx={{background:"#00CED1",color:"white",borderRadius:"50%",width:"10px",height:"55px"}}>+</Button>
          </TableCell>
          </TableRow>

        </Table>

        <Box sx={{
          display: "flex",
            flexDirection: "row",
            justifyContent:"flex-end",
            mt:20,gap:"10px"

            }}>
              <Button sx={{background:"	#00CED1",color:"white",p:1}}>Edit</Button>
              <Button sx={{background:"red",color:"white",p:1}}>Delete</Button>
              <Button sx={{background:"#BF40BF",color:"white",p:1}}>Save</Button>

        </Box>




      </Box>
    </Box>
  );
}
