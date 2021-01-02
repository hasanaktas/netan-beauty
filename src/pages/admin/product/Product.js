import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct, useSnack } from "hooks";
import {
  Container,
  Card,
  Grid,
  TextField,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import { TwitterPicker } from "react-color";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Page } from "components";
import { IconPicker, ImagePicker } from "./components";

const AdminProductPage = () => {
  let navigate = useNavigate();
  const snack = useSnack();
  const [dialog, setDialog] = useState(false);
  const { productId } = useParams();
  const { error, loading, product, setProduct, save, remove } = useProduct(
    productId
  );
  if (loading) {
    return <div>Yükleniyor</div>;
  }
  if (error) {
    return <div>Bir Hata Meydana Geldi</div>;
  }

  return (
    <Page title="Netan Beauty">
      <Container>
        <Card>
          <CardHeader
            subheader={productId === "new" ? "Yeni Ürün" : productId}
            title={productId === "new" ? "Yeni" : product.name.tr}
            action={
              productId === "new" ? null : (
                <IconButton
                  onClick={() => {
                    setDialog(true);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              )
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Adı - Türkçe"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: {
                        ...product.name,
                        tr: e.target.value,
                      },
                    })
                  }
                  value={product.name.tr}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Adı - İngilizce"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: {
                        ...product.name,
                        en: e.target.value,
                      },
                    })
                  }
                  value={product.name.en}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Altbaşlık - Türkçe"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      subName: {
                        ...product.subName,
                        tr: e.target.value,
                      },
                    })
                  }
                  value={product.subName.tr}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Altbaşlık - İngilizce"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      subName: {
                        ...product.subName,
                        en: e.target.value,
                      },
                    })
                  }
                  value={product.subName.en}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Fiyat"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: {
                        ...product.price,
                        normal: e.target.value,
                      },
                    })
                  }
                  value={product.price.normal}
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ürün Sahte Fiyat"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: {
                        ...product.price,
                        pseudo: e.target.value,
                      },
                    })
                  }
                  value={product.price.pseudo}
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Seo URL "
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      seoUrl: e.target.value,
                    })
                  }
                  value={product.seoUrl}
                  variant="outlined"
                />
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Renk Seçenekleri</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        options: [
                          ...product.options,
                          {
                            color: "#ABB8C3",
                            saleChannel: [
                              { link: "hepsiburada", shop: "" },
                              { link: "n11", shop: "" },
                              { link: "trendyol", shop: "" },
                            ],
                            images: [],
                          },
                        ],
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {product.options.map((item, productIndex) => {
                  return (
                    <Accordion key={productIndex}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Seçenek {productIndex + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                              <ImagePicker
                                length={4}
                                order={productIndex}
                                images={item.images}
                                removeImage={(selected) => {
                                  const newOptions = [...product.options];
                                  newOptions[productIndex].images.splice(
                                    selected,
                                    1
                                  );
                                  setProduct({
                                    ...product,
                                    options: [...newOptions],
                                  });
                                  snack("Silme Başarılı", "success");
                                }}
                                setSrc={(e, order) => {
                                  let newOptions = [...product.options];
                                  newOptions[order].images.push(e);
                                  setProduct({
                                    ...product,
                                    options: [...newOptions],
                                  });
                                  snack("Yükleme Başarılı", "success");
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item container xs={12} md={6} spacing={3}>
                            <Grid item xs={12}>
                              <Box
                                display="flex"
                                alignItems="center"
                                padding={2}
                              >
                                <Box
                                  bgcolor={item.color}
                                  width={30}
                                  height={30}
                                  marginRight={2}
                                  borderRadius={5}
                                />
                                <Typography>Ürün Rengi</Typography>
                              </Box>

                              <TwitterPicker
                                color={item.color}
                                onChange={(e) => {
                                  const newOptions = [...product.options];
                                  newOptions[productIndex].color = e.hex;

                                  setProduct({
                                    ...product,
                                    options: [...newOptions],
                                  });
                                }}
                              />
                            </Grid>
                            {item.saleChannel.map((sale, saleIndex) => {
                              return (
                                <Grid key={saleIndex} item xs={12}>
                                  <TextField
                                    fullWidth
                                    onChange={(e) => {
                                      const newOptions = [...product.options];
                                      newOptions[productIndex].saleChannel[
                                        saleIndex
                                      ].link = e.target.value;

                                      setProduct({
                                        ...product,
                                        options: [...newOptions],
                                      });
                                    }}
                                    label={sale.shop}
                                    value={sale.link}
                                    variant="outlined"
                                  />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Özellikler</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        properties: [
                          ...product.properties,
                          {
                            icon: 0,
                            title: {
                              tr: "",
                              en: "",
                            },
                          },
                        ],
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {product.properties.map((item, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Özellik {index + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Box
                              p={2}
                              display="flex"
                              width="100%"
                              justifyContent="center"
                            >
                              <IconPicker
                                selectedIcon={item.icon}
                                setSelectedIcon={(e) => {
                                  const newProperties = [...product.properties];
                                  newProperties[index].icon = e;
                                  setProduct({
                                    ...product,
                                    properties: [...newProperties],
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Baslık - Türkçe`}
                              value={item.title.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newProperties = [...product.properties];
                                newProperties[index].title.tr = e.target.value;
                                setProduct({
                                  ...product,
                                  properties: [...newProperties],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Baslık - İngilizce`}
                              value={item.title.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newProperties = [...product.properties];
                                newProperties[index].title.en = e.target.value;
                                setProduct({
                                  ...product,
                                  properties: [...newProperties],
                                });
                              }}
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Kutular</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        boxes: [
                          ...product.boxes,
                          {
                            icon: 0,
                            title: {
                              tr: "",
                              en: "",
                            },
                            subTitle: {
                              tr: "",
                              en: "",
                            },
                          },
                        ],
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {product.boxes.map((item, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Kutu {index + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Box
                              p={2}
                              display="flex"
                              width="100%"
                              justifyContent="center"
                            >
                              <IconPicker
                                selectedIcon={item.icon}
                                setSelectedIcon={(e) => {
                                  const newBoxes = [...product.boxes];
                                  newBoxes[index].icon = e;
                                  setProduct({
                                    ...product,
                                    boxes: [...newBoxes],
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - Türkçe`}
                              value={item.title.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newBoxes = [...product.boxes];
                                newBoxes[index].title.tr = e.target.value;
                                setProduct({
                                  ...product,
                                  boxes: [...newBoxes],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - İngilizce`}
                              value={item.title.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newBoxes = [...product.boxes];
                                newBoxes[index].title.en = e.target.value;
                                setProduct({
                                  ...product,
                                  boxes: [...newBoxes],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - Türkçe`}
                              value={item.subTitle.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newBoxes = [...product.boxes];
                                newBoxes[index].subTitle.tr = e.target.value;
                                setProduct({
                                  ...product,
                                  boxes: [...newBoxes],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - İngilizce`}
                              value={item.subTitle.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newBoxes = [...product.boxes];
                                newBoxes[index].subTitle.en = e.target.value;
                                setProduct({
                                  ...product,
                                  boxes: [...newBoxes],
                                });
                              }}
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Tanıtım</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        promotion: {
                          ...product.promotion,
                          properties: [
                            ...product.promotion.properties,
                            {
                              icon: 0,
                              title: {
                                tr: "",
                                en: "",
                              },
                              subTitle: {
                                tr: "",
                                en: "",
                              },
                            },
                          ],
                        },
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label={`Başlık - Türkçe`}
                  value={product.promotion.title.tr}
                  onChange={(e) => {
                    const newPromotion = { ...product.promotion };
                    newPromotion.title.tr = e.target.value;
                    setProduct({
                      ...product,
                      promotion: { ...newPromotion },
                    });
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label={`Başlık - İngilizce`}
                  value={product.promotion.title.en}
                  onChange={(e) => {
                    const newPromotion = { ...product.promotion };
                    newPromotion.title.en = e.target.value;
                    setProduct({
                      ...product,
                      promotion: { ...newPromotion },
                    });
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <ImagePicker
                  length={1}
                  order={"0-promotion"}
                  images={product.promotion.images}
                  removeImage={(selected) => {
                    const newPromotion = { ...product.promotion };
                    newPromotion.images.splice(selected, 1);
                    setProduct({
                      ...product,
                      promotion: { ...newPromotion },
                    });
                    snack("Silme Başarılı", "success");
                  }}
                  setSrc={(e, order) => {
                    const newPromotion = { ...product.promotion };
                    newPromotion.images.push(e);
                    setProduct({
                      ...product,
                      promotion: { ...newPromotion },
                    });
                    snack("Yükleme Başarılı", "success");
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                {product.promotion.properties.map((item, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Madde {index + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Box
                              p={2}
                              display="flex"
                              width="100%"
                              justifyContent="center"
                            >
                              <IconPicker
                                selectedIcon={item.icon}
                                setSelectedIcon={(e) => {
                                  const newPromotion = { ...product.promotion };
                                  newPromotion.properties[index].icon = e;
                                  setProduct({
                                    ...product,
                                    promotion: { ...newPromotion },
                                  });
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - Türkçe`}
                              value={item.title.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newPromotion = { ...product.promotion };
                                newPromotion.properties[index].title.tr =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  promotion: { ...newPromotion },
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - İngilizce`}
                              value={item.title.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newPromotion = { ...product.promotion };
                                newPromotion.properties[index].title.en =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  promotion: { ...newPromotion },
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - Türkçe`}
                              value={item.subTitle.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newPromotion = { ...product.promotion };
                                newPromotion.properties[index].subTitle.tr =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  promotion: { ...newPromotion },
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - İngilizce`}
                              value={item.subTitle.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newPromotion = { ...product.promotion };
                                newPromotion.properties[index].subTitle.en =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  promotion: { ...newPromotion },
                                });
                              }}
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6">Kolay Kullanım</Typography>
                  <IconButton
                    variant="contained"
                    onClick={() =>
                      setProduct({
                        ...product,
                        easyToUse: [
                          ...product.easyToUse,
                          {
                            title: {
                              tr: "",
                              en: "",
                            },
                            subTitle: {
                              tr: "",
                              en: "",
                            },
                            images: [],
                          },
                        ],
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                {product.easyToUse.map((item, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> Madde {index + 1}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                              <ImagePicker
                                length={1}
                                order={"0-easytouse"}
                                images={item.images}
                                removeImage={(selected) => {
                                  const newEasyToUse = [...product.easyToUse];
                                  newEasyToUse[index].images.splice(
                                    selected,
                                    1
                                  );
                                  setProduct({
                                    ...product,
                                    easyToUse: [...newEasyToUse],
                                  });
                                  snack("Silme Başarılı", "success");
                                }}
                                setSrc={(e, order) => {
                                  const newEasyToUse = [...product.easyToUse];
                                  newEasyToUse[index].images.push(e);
                                  setProduct({
                                    ...product,
                                    easyToUse: [...newEasyToUse],
                                  });
                                  snack("Yükleme Başarılı", "success");
                                }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - Türkçe`}
                              value={item.title.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newEasyToUse = [...product.easyToUse];
                                newEasyToUse[index].title.tr = e.target.value;
                                setProduct({
                                  ...product,
                                  easyToUse: [...newEasyToUse],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Başlık - İngilizce`}
                              value={item.title.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newEasyToUse = [...product.easyToUse];
                                newEasyToUse[index].title.en = e.target.value;
                                setProduct({
                                  ...product,
                                  easyToUse: [...newEasyToUse],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - Türkçe`}
                              value={item.subTitle.tr}
                              variant="outlined"
                              onChange={(e) => {
                                const newEasyToUse = [...product.easyToUse];
                                newEasyToUse[index].subTitle.tr =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  easyToUse: [...newEasyToUse],
                                });
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              label={`Alt Başlık - İngilizce`}
                              value={item.subTitle.en}
                              variant="outlined"
                              onChange={(e) => {
                                const newEasyToUse = [...product.easyToUse];
                                newEasyToUse[index].subTitle.en =
                                  e.target.value;
                                setProduct({
                                  ...product,
                                  easyToUse: [...newEasyToUse],
                                });
                              }}
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    if (product.seoUrl === "") {
                      snack("SEO URL BOS OLAMAZ", "error");
                    } else {
                      save()
                        .then(() => {
                          snack("KAYIT BAŞARILI", "success");
                          navigate(`/admin/products`);
                        })
                        .catch(() => {
                          snack("HATA MEYDANA GELDİ", "error");
                        });
                    }
                  }}
                >
                  Kaydet
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Dialog onClose={() => setDialog(false)} open={dialog}>
        <DialogTitle>Ürünü Sil!</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialog(false)} color="primary">
            Vazgeç
          </Button>
          <Button
            onClick={() => {
              remove(productId).then(() => {
                snack("Silme Başarılı", "success");
                navigate(`/admin/products`);
              });
            }}
            color="primary"
          >
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};

export default AdminProductPage;
