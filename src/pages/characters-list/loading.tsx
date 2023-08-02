import { Grid, Stack, Typography } from "@mui/material";
import ImageSkeleton from "../../components/image-skeleton";

function LoadingCharacterList() {
  return (
    <Stack bgcolor="#fffae0" width="100wh" minHeight="100vh">
      <Stack width="100%" direction="row" justifyContent="center">
        <Typography variant="h3" my={10} textAlign="center" color="#474747">
          Rick And Morty Album
        </Typography>
      </Stack>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 3 }}
        columnSpacing={{ xs: 1, md: 3 }}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
        <ImageSkeleton />
      </Grid>
    </Stack>
  );
}

export default LoadingCharacterList;
