import {
  KeyOutlined,
  LockOpenOutlined,
  MemoryOutlined,
  TerminalOutlined,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
// import { Helmet } from "react-helmet-async";

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",

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
export const SubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",

  marginBottom: theme.spacing(4),
  fontSize: "2rem",
  margin: 0,
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.0rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
}));

export const About = () => {
  return (
    <Box p={4}>
      {/* <Helmet>
        <title>About Us - RapidLock Locksmith</title>
        <meta
          name="description"
          content="Serving Your Security Needs Since 1998 in Maharagama, Sri Lanka"
        />
      </Helmet> */}

      <Heading>About Us</Heading>
      <Heading>Welcome to KeyHome Locksmith Services</Heading>
      <SubHeading>Serving Your Security Needs Since 1998</SubHeading>

      <Typography variant="h6">
        At KeyHome, we’ve been providing professional and reliable locksmith
        services in Maharagama for over 25 years. Whether you're locked out,
        need a spare key, or want to upgrade to the latest smart key systems,
        we’ve got you covered.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5">
        Our Services Include:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <TerminalOutlined />
          </ListItemIcon>
          <ListItemText>Car key programming </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <KeyOutlined />
          </ListItemIcon>
          <ListItemText>cutting and duplication</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOpenOutlined />
          </ListItemIcon>
          <ListItemText>Lock repairs and replacements</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MemoryOutlined />
          </ListItemIcon>
          <ListItemText>Key writing and chip key solutions</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MemoryOutlined />
          </ListItemIcon>
          <ListItemText>Emergency car unlocking</ListItemText>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 6 }}></Grid>
        <Grid size={{ xs: 12, lg: 6 }}></Grid>
      </Grid>
    </Box>
  );
};
