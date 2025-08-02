import { Box } from "@mui/material";

export const Map = () => {
  return (
    <Box py={4} sx={{ width: "100%", height: "400px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.389603308607!2d79.92149981177242!3d6.843809493125823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251bd3c9b262d%3A0x56ad9ecba02bb100!2sKey%20Home%20(key%20cutting)!5e0!3m2!1sen!2slk!4v1753703861371!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
