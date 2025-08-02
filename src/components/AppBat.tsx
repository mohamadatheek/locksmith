import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const Image = styled("img")(({}) => ({
  display: "block",
  width: "90px",
}));

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "#ffffff", height: "100px" }}>
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
