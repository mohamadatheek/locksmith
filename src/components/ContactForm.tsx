import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";




const GalleryHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  color: "#000", // or any color you prefer
  marginBottom: theme.spacing(4),
  fontSize: "2rem",

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
export const ContactForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const handleSave = (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <Box p={4} component={"form"} onSubmit={handleSubmit(handleSave)}>
      <Box py={2}>
        <GalleryHeading>Message us</GalleryHeading>
      </Box>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="First Name"
                fullWidth
                onChange={onChange}
                value={value}
                size="small"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>
        <Grid size={6}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Last Name"
                fullWidth
                onChange={onChange}
                value={value}
                size="small"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>
        <Grid size={12}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Email"
                fullWidth
                onChange={onChange}
                value={value}
                size="small"
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>
        <Grid size={12}>
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Message"
                fullWidth
                onChange={onChange}
                value={value}
                size="small"
                multiline
                rows={4}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </Grid>
        <Grid size={12}>
          <Button type="submit" variant="contained" size="small">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
