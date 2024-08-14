"use client";

import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "react-bootstrap";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Button, Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcards SaaS</title>
        <meta name="description" content="Flashcards SaaS" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcards SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit">Log in</Button>
            <Button color="inherit">Sign up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, mr: 2 }}
          href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          {/* Feature items */}
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Pricing plans */}
        </Grid>
      </Box>
    </Container>
  );
}
