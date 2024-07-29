import React from 'react';
import './globals.css'
import Header from './header.js';
import Singup from './signup.js';
import Grid from './grid.js';
import Footer from './footer.js';

export default function Home() {
    return (
        <>
            <Header/>
            <Signup/>
            <Grid/>
            <Footer/>
        </>
    );
  };

