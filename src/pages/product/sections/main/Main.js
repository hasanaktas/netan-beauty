import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  ButtonBase,
  Box,
  TextField,
  Divider,
  makeStyles,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { icons } from "configs";
import { useLocale } from "hooks";
import { ImageSlider } from "../../components";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  pseudoPrice: {
    textDecoration: "line-through",
    marginRight: theme.spacing(1),
  },
  marketPlaceButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: 10,
  },
  marketPlace: {
    width: 100,
    height: "auto",
  },
}));

const MainSection = (props) => {
  const [locale] = useLocale();
  const { product } = props;
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [tcNo, setTcNo] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [contractConfirmation, setContractConfirmation] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = (value) => {
    setDialogOpen(false);
  };

  const sendMail = () => {
    setButtonDisabled(true);
    emailjs
      .send("service_xquy6jb", "template_eq3zzgg", {
        from_name: `${product.name.tr} - ${firstName} ${lastName}`,
        message: `
        Ad: ${firstName},
        Soyad: ${firstName},
        TC NO: ${tcNo},
        Telefon: ${phone},
        Adres:${adress},
        `,
      })
      .then(
        (result) => {
          console.log(result.text);
          setCompleted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={6}>
          <ImageSlider images={product.options[selectedVariant].images} />
        </Grid>
        <Grid item container xs={12} md={6} spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h3" color="primary">
              {locale.language === "tr" ? product.name.tr : product.name.en}
            </Typography>
            <Typography variant="body1">
              {locale.language === "tr"
                ? product.subName.tr
                : product.subName.en}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" className={classes.pseudoPrice}>
                {product.price.pseudo} TL
              </Typography>

              <Typography variant="h4" color="primary">
                {product.price.normal} TL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              {product.options.map((item, index) => (
                <Box
                  key={index}
                  bgcolor={item.color}
                  width={40}
                  height={40}
                  marginRight={1}
                  borderRadius={10}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedVariant(index)}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexWrap="wrap">
              {product.properties.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <Box key={index} borderRadius={10} mr={1} mt={2}>
                    <Chip
                      style={{ padding: 10 }}
                      variant="outlined"
                      icon={<Icon />}
                      label={
                        locale.language === "tr" ? item.title.tr : item.title.en
                      }
                    />
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexWrap="wrap">
              {product.options[selectedVariant].saleChannel.map(
                (item, index) => {
                  if (item.shop === "hepsiburada" && item.link.length > 0) {
                    return (
                      <ButtonBase
                        key={index}
                        onClick={() =>
                          window.open(`https://${item.link}`, "_blank")
                        }
                        className={classes.marketPlaceButton}
                      >
                        <img
                          alt="hepsiburada"
                          src="/static/images/marketplace/hepsiburada.png"
                          className={classes.marketPlace}
                        />
                      </ButtonBase>
                    );
                  }
                  if (item.shop === "trendyol" && item.link.length > 0) {
                    return (
                      <ButtonBase
                        key={index}
                        onClick={() =>
                          window.open(`https://${item.link}`, "_blank")
                        }
                        className={classes.marketPlaceButton}
                      >
                        <img
                          alt="trendyol"
                          src="/static/images/marketplace/trendyol.png"
                          className={classes.marketPlace}
                        />
                      </ButtonBase>
                    );
                  }
                  if (item.shop === "n11" && item.link.length > 0) {
                    return (
                      <ButtonBase
                        key={index}
                        onClick={() =>
                          window.open(`https://${item.link}`, "_blank")
                        }
                        className={classes.marketPlaceButton}
                      >
                        <img
                          alt="n11"
                          src="/static/images/marketplace/n11.png"
                          className={classes.marketPlace}
                        />
                      </ButtonBase>
                    );
                  }
                  return null;
                }
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              startIcon={<ArrowForwardIosIcon />}
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClickOpen}
            >
              {locale.greatePrice}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={dialogOpen}
      >
        <DialogTitle id="simple-dialog-title">
          {locale.language === "tr" ? product.name.tr : product.name.en}
        </DialogTitle>
        <DialogContent style={{ minHeight: completed ? 300 : 500 }}>
          {!completed && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Ad"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Soyad"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Tc No(Fatura İçin Gerekli)"
                  fullWidth
                  value={tcNo}
                  onChange={(e) => setTcNo(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Telefon"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Adres"
                  multiline
                  fullWidth
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Garanti Bankası</Typography>
                <Typography variant="body2">
                  Iban:TR70 4400 3270 5112 2440 42
                </Typography>
                <Typography variant="body2">
                  Hesap No:262042 6321 5543
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Yapi Kredi Bankası</Typography>
                <Typography variant="body2">
                  Iban:TR70 1240 5243 4512 6740 81
                </Typography>
                <Typography variant="body2">
                  Hesap No:3445 64513 234324
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    color="primary"
                    checked={contractConfirmation}
                    onChange={(e) => setContractConfirmation(e.target.checked)}
                  />
                  <Typography>
                    Mesafeli Satış Sözleşmesini Onaylıyorum
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={sendMail}
                  disabled={
                    firstName === "" ||
                    lastName === "" ||
                    adress === "" ||
                    phone === "" ||
                    tcNo === "" ||
                    contractConfirmation === false ||
                    buttonDisabled === true
                  }
                >
                  SİPARİŞİMİ OLUŞTUR
                </Button>
              </Grid>
            </Grid>
          )}
          {completed && (
            <Box
              width="100%"
              display="flex"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/103029540/original/ba447ce3e98868bd93bd32125ac80b62e35cea9e/get-government-related-task-completed-for-you-in-pakistan.jpg"
                style={{ width: 300, height: "auto" }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MainSection;
