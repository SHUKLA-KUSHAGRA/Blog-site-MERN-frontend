import React from 'react';
import { Grid , Box , FormControl } from "@mui/material";
import logo from "../../assets/logo.jpg";

function create() {
  return (
    <>
        <Grid container alignItems="center" justifyContent="center" marginTop="5%">        
            <Box sx={{border: 1,width:"55%",minWidth:300,p:3,boxShadow:20}}>
            <img src={logo} alt="logo" style={{width:"70%",height:200}}/>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <FormControl>

                </FormControl>
            </Grid>
            </Box>
        </Grid>
    </>
  )
}

export default create;