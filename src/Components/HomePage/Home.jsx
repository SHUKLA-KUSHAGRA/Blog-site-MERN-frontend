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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{textAlign:'center'}}>
                <Link to='/create'>
                  <Button variant='contained'>Create Blog</Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{textAlign:'center'}}>
              <Link to='/home' style={{color : 'black',fontWeight : 400}}>ALL CATEGORIES</Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell style={{textAlign:'center'}}>
                <Link to={`/home/?category=${category.type}`} style={{color : 'black',fontWeight : 400}}>{category.type}</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid container item xs={12} sm={10} lg={10} style={{justifyContent:'space-evenly'}}>
        <Posts/>
      </Grid>
    </Grid>
    </>
  )
}

export default Home;