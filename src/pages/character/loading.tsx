import { Skeleton, Stack } from "@mui/material";

function LoadingCharacter() {
  return (
    <Stack
      width="100wh"
      height="100vh"
      direction="column"
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
      bgcolor="#fffae0"
    >
      <Stack
        mx="auto"
        direction={{ xs: "column", md: "row" }}
        bgcolor="#FFFFFF"
      >
        <Skeleton
          variant="rectangular"
          width={330}
          height={330}
          style={{ margin: "auto" }}
        />
        <Stack p={2}>
          <Skeleton variant="text" sx={{ fontSize: "5rem" }} width="25rem" />
          <Skeleton
            variant="text"
            sx={{ fontSize: "2rem" }}
            color="#999999"
            width="5rem"
          />
          <Stack my={5} direction="row" alignItems="center" gap={2}>
            <Skeleton variant="text" sx={{ fontSize: "3rem" }} width="15rem" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LoadingCharacter;
