import { Box, Button, Typography } from "@mui/material";

export const FullSkeleton = () => {
  

  return (
    <Box p={10} bgcolor={"#0067ff"}>
      <Typography
        textAlign={"center"}
        color="#ffffff"
        fontSize={30}
        fontFamily={"Staatliches"}
      >
        We are very proud to be serving our local area for over 27 years!
      </Typography>
      <Box py={2} flexDirection={'column'} alignItems={'center'} gap={2} display={"flex"} justifyContent={"center"}>
        <a href="tel:+94774380935" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#ffffff",

              borderColor: "#ffffff",
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
            size="large"
          >
            Call +94 77 438 0935
          </Button>
        </a>
      </Box>
    </Box>
  );
};
