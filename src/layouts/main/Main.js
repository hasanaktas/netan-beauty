import React from "react";
import { Button, Container, Box } from "@material-ui/core";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Button>MainLayout</Button>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default MainLayout;
