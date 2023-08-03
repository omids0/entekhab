import { Stack, Typography } from "@mui/material";

function OnError() {
  return (
    <Stack
      minWidth="100wh"
      minHeight="100vh"
      bgcolor="#fffae0"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h3"
        fontSize="3rem"
        color="#333333"
        fontFamily={"fantasy"}
      >
        Something Went Wrong...!
      </Typography>
    </Stack>
  );
}

export default OnError;
