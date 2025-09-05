"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Button, Paper } from "@mui/material";

export default function SignoutPage() {
  const router = useRouter();

  const handleSignout = () => {
    // 👉 Clear auth state (JWT, cookies, localStorage, etc.)
    localStorage.removeItem("token"); // example if you're storing JWT in localStorage
    sessionStorage.clear();

    // Redirect to home or login
    router.push("/login");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Sign Out
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Are you sure you want to sign out?
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSignout}>
          Yes, Sign Out
        </Button>
      </Paper>
    </Container>
  );
}
