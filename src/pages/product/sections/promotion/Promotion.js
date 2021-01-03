import React from "react";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import { useLocale } from "hooks";
import { icons } from "configs";

const PromotionSection = (props) => {
  const [locale] = useLocale();
  const { product } = props;
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={6}>
        <img
          alt="hepsiburada"
          src={product.promotion.images[0]}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Box ml={6} mb={3}>
            <Typography variant="h4">
              {locale.language === "tr"
                ? product.promotion.title.tr
                : product.promotion.title.en}
            </Typography>
          </Box>

          {product.promotion.properties.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Box key={index} display="flex" mb={4}>
                <Box
                  mr={1}
                  color="primary"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <IconButton>
                    <Icon />
                  </IconButton>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Typography variant="h6" gutterBottom>
                    {locale.language === "tr" ? item.title.tr : item.title.en}
                  </Typography>
                  <Typography variant="body2">
                    {locale.language === "tr"
                      ? item.subTitle.tr
                      : item.subTitle.en}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PromotionSection;
