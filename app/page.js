"use client";

import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "react-bootstrap";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { origin: "http://localhost:3000" },
    });
    const checkoutSessionJson = await checkoutSession.json();

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

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
            <Button color="inherit" onClick={handleLogin}>
              Log in
            </Button>
            <Button color="inherit" onClick={handleSignUp}>
              Sign up
            </Button>
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
          {[
            "Automatic Text Parsing",
            "Multiple Flashcard Designs",
            "Export to PDF",
            "Collaborative Decks",
            "Advanced Study Modes",
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {feature}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Description of the ${feature.toLowerCase()}.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              name: "Basic",
              price: "$9/month",
              features: ["Feature A", "Feature B", "Feature C"],
            },
            {
              name: "Pro",
              price: "$19/month",
              features: ["Feature A", "Feature B", "Feature C", "Feature D"],
            },
            {
              name: "Enterprise",
              price: "Contact Us",
              features: [
                "All Features",
                "Priority Support",
                "Custom Solutions",
              ],
            },
          ].map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {plan.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.features.join(", ")}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}>
                    Choose {plan.name}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
