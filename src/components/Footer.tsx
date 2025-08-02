import { Box, Typography, Link, Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#212121",
        color: "#fff",
        py: 4,
        px: 2,
        mt: 6,
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6" fontFamily="Staatliches" gutterBottom>
            KEY-HOME
          </Typography>
          <Typography variant="body2">
            Trusted locksmith services for residential, commercial, and
            automotive needs.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6" fontFamily="Staatliches" gutterBottom>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography
              sx={{ color: "#ffffff" }}
              component={Link}
              underline="hover"
              href="#contact"
            >
              Services
            </Typography>
            <Typography
              sx={{ color: "#ffffff" }}
              component={Link}
              underline="hover"
              href="#contact"
            >
              Gallery
            </Typography>
            <Typography
              sx={{ color: "#ffffff" }}
              component={Link}
              underline="hover"
              href="#contact"
            >
              Contact Us
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6" fontFamily="Staatliches" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            📞 +94 77 438 0935
            <br />
            📍 Colombo, Sri Lanka
            <br />
            ✉️ support@dto-locksmith.com
          </Typography>
        </Grid>
      </Grid>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} KEY-HOME. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
