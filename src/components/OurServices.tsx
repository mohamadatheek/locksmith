import { Box, Grid, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Image = styled("img")({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "auto",
  borderRadius: "15px",
});

export const Layout = styled(Box)(({ theme }) => ({
  // display: "flex",
  overflow: "auto",
  width: "100%",
  margin: "0 auto",
  // gap: "20px",
  [theme.breakpoints.down("sm")]: {},

  [theme.breakpoints.up("md")]: {},

  [theme.breakpoints.up("lg")]: {},

  [theme.breakpoints.up("xl")]: {
    maxWidth: "1240px",
  },
}));

const GalleryHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  color: "#000", // or any color you prefer
  marginBottom: theme.spacing(4),
  fontSize: "2rem",
  margin: 0,
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.0rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
}));

const GallerySubheading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches", // or use "Staatliches" if you want same font

  fontSize: "2rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
}));

const data = {
  automotive: [
    "Car Lockout Assistance",
    "Car Key Replacement & Duplication",
    "Ignition Repair & Replacement",
    "Key Fob Programming",
    "Broken Key Extraction",
  ],
  residential: [
    "Emergency House Lockout",
    "Lock Installation & Repair",
    "Rekeying Locks",
    "Smart Lock Setup",
    "Home Security Upgrades",
  ],
  commercial: [
    "Office & Building Lockouts",
    "Master Key Systems",
    "Access Control Systems",
    "Panic Bars & Exit Devices",
    "High-Security Lock Installation",
  ],
};

export const OurServices = () => {
  return (
    <Box p={4}>
      <Layout>
        <Box py={2}>
          <GalleryHeading>Our Services</GalleryHeading>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Image
                  src={`${
                    import.meta.env.BASE_URL
                  }images/services-01-free-img.jpg`}
                />
              </Box>
              <Box>
                <GallerySubheading>Automotive</GallerySubheading>
              </Box>
              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                }}
              >
                {data.automotive.map((service, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      m: 0,
                      p: 0,
                      listStyle: "none",
                    }}
                  >
                    <Typography variant="subtitle2" fontSize={19}>
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Image
                  src={`${
                    import.meta.env.BASE_URL
                  }images/services-02-free-img.jpg`}
                />
              </Box>
              <Box>
                <GallerySubheading>Residential</GallerySubheading>
              </Box>
              <Box
                component="ul"
                sx={{
                  m: 0, // margin: 0
                  p: 0, // padding: 0
                }}
              >
                {data.residential.map((service, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      m: 0,
                      p: 0,
                      listStyle: "none",
                    }}
                  >
                    <Typography variant="subtitle2" fontSize={19}>
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Image
                  src={`${
                    import.meta.env.BASE_URL
                  }images/services-03-free-img.jpg`}
                />
              </Box>
              <Box>
                <GallerySubheading>Commercial</GallerySubheading>
              </Box>
              <Box
                component="ul"
                sx={{
                  m: 0, // margin: 0
                  p: 0, // padding: 0
                }}
              >
                {data.commercial.map((service, index) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      m: 0,
                      p: 0,
                      listStyle: "none",
                    }}
                  >
                    <Typography variant="subtitle2" fontSize={19}>
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </Box>
  );
};
