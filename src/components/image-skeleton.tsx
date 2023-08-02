import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

function ImageSkeleton() {
  return (
    <Grid item>
      <Stack
        style={{ width: "fit-content" }}
        p={5}
        m={{ xs: 0.5, md: 2 }}
        bgcolor="#FFFFFF"
        boxShadow={3}
      >
        <Skeleton variant="rectangular" width={260} height={260} />
      </Stack>
    </Grid>
  );
}

export default ImageSkeleton;
