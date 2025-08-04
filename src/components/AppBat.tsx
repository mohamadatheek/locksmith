import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const Image = styled("img")(({}) => ({
  display: "block",
  width: "60px",
}));

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        px={3}
        alignItems={"center"}
        color={"#ffffff"}
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={"#2d2d39"}
        height={"50px"}
      >
        <Box
          fontSize={16}
          fontWeight={"bold"}
          component={Typography}
          variant="subtitle2"
        >
          ALWAYS OPEN! We work 24/7
        </Box>
        <Box
          fontSize={16}
          fontWeight={"bold"}
          component={Typography}
          variant="subtitle2"
        >
          <a
            href="tel:+94774380935"
            style={{
              textDecoration: "none",
              color: "inherit", // or set your own like "#fff"
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "8px",
              display: "inline-block",
              transition: "all 0.3s ease",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Call Now! 77 438 0935
          </a>
        </Box>
      </Box>

      <AppBar
        elevation={0}
        position="static"
        sx={{ bgcolor: "#ffffffff", height: "70px" }}
      >
        <Toolbar>
          <Box>
            <Image src={`${import.meta.env.BASE_URL}keyhome.png`} />
          </Box>
          <Typography
            fontFamily={"Staatliches"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            KEY-HOME
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
