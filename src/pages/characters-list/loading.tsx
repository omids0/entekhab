import { Grid, Stack, Typography } from "@mui/material";
import ImageSkeleton from "../../components/image-skeleton";

function LoadingCharacterList() {
  return (
    <Stack bgcolor="#fffae0" width="100wh" minHeight="100vh">
      <Stack width="100%" direction="row" justifyContent="center">
        <Typography
          variant="h1"
          my={{ xs: 3, md: 10 }}
          textAlign="center"
          color="#333333"
          fontSize="3rem"
          fontFamily={"fantasy"}
        >
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
