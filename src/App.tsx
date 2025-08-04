import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import TopAppBar from "./components/AppBat";
import { OurServices } from "./components/OurServices";
import { PhotoGallery } from "./components/PhotoGallery";
import { ContactForm } from "./components/ContactForm";
import { FullSkeleton } from "./components/FullSkeleton";
import { Footer } from "./components/Footer";
import { Map } from "./components/Map";
import { useState, useEffect } from "react";
import { About, SubHeading } from "./components/About";

export const Layout = styled(Box)(({ theme }) => ({
  overflow: "auto",
  width: "100%",
  minHeight: "100vh",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {},

  [theme.breakpoints.up("md")]: {},

  [theme.breakpoints.up("lg")]: {},

  [theme.breakpoints.up("xl")]: {
    maxWidth: "1140px",
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${`${import.meta.env.BASE_URL}images/bg-image.jpg`})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "40vh",

  padding: theme.spacing(4),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(6),
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(10),
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontFamily: "Staatliches",
  textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
  lineHeight: 1.2,
  textAlign: "left",
  maxWidth: "100%",
  width: "100%",

  fontSize: "1.5rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "3.6875rem",
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #f43f5e 0%, #b91c1c 100%)",
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1.5, 4),
    fontSize: "1px",
  },

  [theme.breakpoints.up("md")]: {
    // padding: theme.spacing(1.5, 5),
    fontSize: "1.125rem",
  },

  "&:hover": {
    background: "linear-gradient(90deg, #b91c1c 0%, #f43f5e 100%)",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  color: "#ffffff", // or any color you prefer
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

function App() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Backdrop
        open={open}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Layout>
        <Box>
          <TopAppBar />
          <HeroSection>
            <HeroText>
              <Box>In-shop And Mobile</Box>
              <Box>Locksmith Services,</Box>
              <Box>Since 1998</Box>
              <Box my={3}>
                <a href="tel:+94774380935" style={{ textDecoration: "none" }}>
                  <GradientButton size="small">
                    Call +94 77 438 0935
                  </GradientButton>
                </a>
              </Box>
            </HeroText>
          </HeroSection>

          <Box py={4} color={"#e2dbdbff"} bgcolor={"#665f67"}>
            <Box p={3}>
              <Heading textAlign={"center"}>
                Your Trusted Automotive Locksmith Specialists
              </Heading>
              <Typography
                textAlign={"center"}
                variant="subtitle2"
                fontSize={20}
              >
                we specialize in <strong>car key programming</strong> and
                provide fast, reliable locksmith services tailored to your
                automotive needs. Whether you’ve lost your car key, need a
                spare, or are facing key fob or transponder issues, our skilled
                technicians are here to help—anytime, anywhere.
              </Typography>
            </Box>
          </Box>
          <Box py={4} bgcolor={"#000000"} color={"#ffffff"}>
            <Grid spacing={2} container>
              <Grid size={{ xs: 6, md: 4 }}>
                <Box textAlign={"center"}>
                  <Box fontWeight={"bold"} component={Typography} variant="h1">
                    25
                  </Box>
                  <SubHeading>Experiance</SubHeading>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Box textAlign={"center"}>
                  <Box fontWeight={"bold"} component={Typography} variant="h1">
                    5000+
                  </Box>
                  <SubHeading>Project Completed</SubHeading>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Box textAlign={"center"}>
                  <Box fontWeight={"bold"} component={Typography} variant="h1">
                    3
                  </Box>
                  <SubHeading>Branches</SubHeading>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <OurServices />
          <PhotoGallery />
          <FullSkeleton />
          <Map />
          <About />
          <ContactForm />
          <Footer />
        </Box>
      </Layout>
    </>
  );
}
export default App;
