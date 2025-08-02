import { Box, Button, styled, Typography } from "@mui/material";
import TopAppBar from "./components/AppBat";
import { OurServices } from "./components/OurServices";
import { PhotoGallery } from "./components/PhotoGallery";
import { ContactForm } from "./components/ContactForm";
import { FullSkeleton } from "./components/FullSkeleton";
import { Footer } from "./components/Footer";
import { Map } from "./components/Map";

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
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(90deg, #b91c1c 0%, #f43f5e 100%)",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.4)",
  },
}));

function App() {
  return (
    <Layout>
      <Box>
        <TopAppBar />
        <HeroSection>
          <HeroText>
            <Box>In-shop And Mobile</Box>
            <Box>Locksmith Services,</Box>
            <Box>Since 1998</Box>
            <a href="tel:+94774380935" style={{ textDecoration: "none" }}>
              <GradientButton size="large">Call +94 77 438 0935</GradientButton>
            </a>
          </HeroText>
        </HeroSection>
        <OurServices />
        <PhotoGallery />
        <FullSkeleton />
        <Map/>
        <ContactForm />
        <Footer/>
      </Box>
    </Layout>
  );
}
export default App;
