"use client";

import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: "center",
          borderRadius: 4,
          background: "linear-gradient(135deg, #1976d2, #42a5f5)",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Portfolio Builder 🚀
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Create and showcase your professional portfolio with ease.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mr: 2 }}
          onClick={() => router.push("/signup")}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          onClick={() => router.push("/login")}
        >
          Sign In
        </Button>
      </Paper>

      {/* Features Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Why Choose Portfolio Builder?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">📂 Showcase Projects</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Add your projects with descriptions, images, and links to GitHub or live demos.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">⚡ Highlight Skills</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Display your top skills and technologies to stand out in the job market.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">🎓 Share Experience</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Add your work experience and education to make your portfolio complete.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
