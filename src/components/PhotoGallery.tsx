import {
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Styled layout
const Layout = styled(Box)(({ theme }) => ({
  overflow: "auto",
  width: "100%",
  minHeight: "100vh",
  margin: "0 auto",
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1240px",
  },
}));

// Styled heading
const GalleryHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Staatliches",
  color: "#000",
  marginBottom: theme.spacing(4),
  fontSize: "2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
}));


const images = Array.from({ length: 30 }, (_, i) =>
  `${import.meta.env.BASE_URL}images/gallery/${i + 1}.jpg`
);

export const PhotoGallery = () => {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const getCols = () => {
    if (xs) return 3;
    if (sm) return 4;
    if (md) return 5;
    if (lg) return 6;
    return 3;
  };

  return (
    <Box p={4}>
      <Layout>
        <GalleryHeading>
          Our Key Duplication Gallery
        </GalleryHeading>

        <Box>
          <ImageList cols={getCols()} gap={5}>
            {images.map((src, index) => (
              <ImageListItem key={index}>
                <img
                  src={src}
                  loading="lazy"
                  alt={`Gallery image ${index + 1}`}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Layout>
    </Box>
  );
};
