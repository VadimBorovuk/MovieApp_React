import React from 'react';
import {Container, Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ContentView = () => {

    return (
        <div>
            <Container maxWidth="xl" style={{padding: 20}}>
                <Navbar/>
                <Grid container style={{
                    marginTop: 20,
                    boxShadow: '0 8px 18px #1976d2',
                    borderRadius: 25,
                }}>
                    <Outlet/>
                </Grid>
            </Container>
        </div>
    );
};

export default ContentView;