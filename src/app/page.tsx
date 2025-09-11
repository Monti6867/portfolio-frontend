"use client";

import { Container, Typography, Button, Box, Grid, Paper, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import FAQ from "../components/FAQ";


export default function HomePage() {
  const router = useRouter();

  return (
    // my section
    




    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Free Portfolio Website Builder
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Create and showcase your professional portfolio in minutes.  
            Simple, elegant, and absolutely free.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, borderRadius: 3 }}
          >
            Make Free Portfolio
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid size={{ xs: 12, md: 6 }} textAlign="center">
          {/* Main Image */}
          <Box sx={{ mb: 3 }}>
            <Image
              src="/Portfolio.png" // put your image inside public folder
               
              alt="Portfolio Preview"
              width={400}
              height={300}
              style={{ borderRadius: "12px" }}
            />
          </Box>

          
        </Grid>
        {/* Icon With Tect */}
          <Stack
            direction="row"
            justifyContent="space-around"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <Box textAlign="center">
              <WorkIcon fontSize="large" color="primary" />
              <Typography variant="body2">Professional</Typography>
            </Box>
            <Box textAlign="center">
              <CodeIcon fontSize="large" color="secondary" />
              <Typography variant="body2">Developer Friendly</Typography>
            </Box>
            <Box textAlign="center">
              <SchoolIcon fontSize="large" sx={{ color: "green" }} />
              <Typography variant="body2">Learn & Grow</Typography>
            </Box>
            <Box textAlign="center">
              <StarIcon fontSize="large" sx={{ color: "gold" }} />
              <Typography variant="body2">Stand Out</Typography>
            </Box>
          </Stack>
      </Grid>



      <FAQ />

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
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={4} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">📂 Showcase Projects</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Add your projects with descriptions, images, and links to GitHub or live demos.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={4} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h6">⚡ Highlight Skills</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Display your top skills and technologies to stand out in the job market.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
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
