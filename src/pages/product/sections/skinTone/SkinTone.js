import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { useLocale } from "hooks";

const SkinTone = () => {
  const [locale] = useLocale();
  const [selectedSkinTone, setSelectedSkinTone] = useState(null);
  const [selectedHairColor, setSelectedHairColor] = useState(null);
  const [selectedText, setSelectedText] = useState({
    bool: "",
    color: "error",
    text: "",
  });
  const skinTones = [
    {
      color: "#FEF3EF",
      name: locale.skinTones.pale,
    },
    {
      color: "#F0E0D1",
      name: locale.skinTones.ivory,
    },
    {
      color: "#E1C6AB",
      name: locale.skinTones.beige,
    },
    {
      color: "#BD906F",
      name: locale.skinTones.lightBrown,
    },
    {
      color: "#92542F",
      name: locale.skinTones.mediumBrown,
    },
    {
      color: "#673E22",
      name: locale.skinTones.darkBrown,
    },
  ];

  const hairColors = [
    {
      color: "#FEEDC2",
      name: locale.hairColors.blonde,
    },
    {
      color: "#DFE1DE",
      name: locale.hairColors.whiteOrGrey,
    },
    {
      color: "#DD6C44",
      name: locale.hairColors.red,
    },
    {
      color: "#B38767",
      name: locale.hairColors.lightBrown,
    },
    {
      color: "#7C573A",
      name: locale.hairColors.mediumBrown,
    },
    {
      color: "#523C27",
      name: locale.hairColors.darkBrown,
    },
    {
      color: "#01010D",
      name: locale.hairColors.black,
    },
  ];

  useEffect(() => {
    if (
      (selectedSkinTone === 0 ||
        selectedSkinTone === 1 ||
        selectedSkinTone === 2 ||
        selectedSkinTone === 3) &&
      selectedHairColor
    ) {
      if (selectedHairColor < 3) {
        setSelectedText({
          bool: locale.skinHair.no.bool,
          color: "error",
          text: locale.skinHair.no.text,
        });
      } else {
        setSelectedText({
          bool: locale.skinHair.yes.bool,
          color: "primary",
          text: locale.skinHair.yes.text,
        });
      }
    }
    if (
      (selectedSkinTone === 4 || selectedSkinTone === 5) &&
      selectedHairColor
    ) {
      setSelectedText({
        bool: locale.skinHair.no.bool,
        color: "error",
        text: locale.skinHair.no.text2,
      });
    }
  }, [selectedSkinTone, selectedHairColor, locale]);

  return (
    <Box width={"100%"} display="flex" flexDirection="column">
      <Box>
        <Typography variant="h3" gutterBottom>
          {locale.canIUseThisProduct}
        </Typography>
        <Typography gutterBottom>
          {locale.canIUseThisProductSubTitle}
        </Typography>
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
        <Typography gutterBottom>{locale.selectSkinTone}</Typography>
        <Box display="flex" flexWrap="wrap" mb={2}>
          {skinTones.map((item, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                borderRadius={10}
                border={
                  index === selectedSkinTone
                    ? "1px solid rgb(160,160,160)"
                    : "none"
                }
                width={100}
                onClick={() => setSelectedSkinTone(index)}
              >
                <Box
                  bgcolor={item.color}
                  borderRadius={10}
                  width={50}
                  height={50}
                  mb={2}
                />
                <Typography variant="caption">{item.name}</Typography>
              </Box>
            );
          })}
        </Box>
        <Typography gutterBottom>{locale.selectNaturalHairColor}</Typography>
        <Box display="flex" flexWrap="wrap">
          {hairColors.map((item, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                borderRadius={10}
                border={
                  index === selectedHairColor
                    ? "1px solid rgb(160,160,160)"
                    : "none"
                }
                width={100}
                onClick={() => setSelectedHairColor(index)}
              >
                <Box
                  bgcolor={item.color}
                  borderRadius={10}
                  width={50}
                  height={50}
                  mb={2}
                />
                <Typography variant="caption">{item.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        display="flex"
        mt={2}
        width="100%"
        flexDirection="column"
        bgcolor="#fff"
        borderRadius={10}
        padding={2}
      >
        <Typography variant="h5" color={selectedText.color}>
          {selectedText.bool}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {selectedText.text}
        </Typography>
        {selectedText.color !== "error" && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            {locale.buy}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SkinTone;
