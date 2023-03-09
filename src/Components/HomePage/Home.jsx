import React from 'react';
import Navbar from "./Navbar.jsx";
import blogbanner from '../../assets/blog-banner.jpg';
import { categories } from './data.js';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import Posts from './Posts.jsx';

function Home() {
  return (
    <>
    <Navbar/>
    <img src={blogbanner} alt="banner" style={{marginTop:'100px',width:'90%',height:'300px'}}/>
    <Grid container>
      <Grid item lg={2} sm={2} xs={12}>
      <div style={{margin:'20px'}}>
        <Link to='/create'>
        <Button variant='contained'>Create Blog</Button>
        </Link>
      </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{textAlign:'center'}}>ALL CATEGORIES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell style={{textAlign:'center'}}>{category.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid container item xs={12} sm={10} lg={10}>
        <Posts/>
      </Grid>
    </Grid>
    </>
  )
}

export default Home;