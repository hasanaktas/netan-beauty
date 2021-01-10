import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useLocale } from "hooks";

const GraphicSection = () => {
  const [locale] = useLocale();

  return (
    <Box width={"100%"} display="flex" flexDirection="column">
      <Box>
        <Typography variant="h3" gutterBottom>
          {locale.graphicSection.title}
        </Typography>
        <Typography gutterBottom>{locale.graphicSection.subTitle}</Typography>
      </Box>
      <Box
        mt={2}
        display="flex"
        width="100%"
        flexDirection="column"
        bgcolor="#fff"
        borderRadius={10}
        padding={2}
      >
        <img
          alt="graphic"
          src="/static/images/product/img_graph.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default GraphicSection;
