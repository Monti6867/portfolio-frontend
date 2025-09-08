"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/signup">
          Sign Up
        </Button>
        <Button color="inherit" component={Link} href="/signin">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
