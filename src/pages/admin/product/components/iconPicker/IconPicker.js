import React, { useState } from "react";
import { Box, Dialog, DialogTitle, IconButton, Grid } from "@material-ui/core";
import { icons } from "configs";

const IconPicker = (props) => {
  const [open, setOpen] = useState(false);
  const { selectedIcon, setSelectedIcon } = props;
  let SeIcon = icons[selectedIcon];
  return (
    <>
      <Box>
        <IconButton onClick={() => setOpen(true)}>
          <SeIcon />
        </IconButton>
      </Box>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <DialogTitle id="simple-dialog-title">
          <Grid container spacing={3}>
            {icons.map((icon, index) => {
              const Icon = icon;
              return (
                <Grid key={index} item xs={3} md={2}>
                  <IconButton
                    key={index}
                    onClick={() => {
                      setSelectedIcon(index);
                      setOpen(false);
                    }}
                  >
                    <Icon />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </DialogTitle>
      </Dialog>
    </>
  );
};

export default IconPicker;
