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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { icons } from "configs";
import { useLocale } from "hooks";
import { ImageSlider } from "../../components";
import emailjs from "emailjs-com";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

var date = new Date();

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
  const [email, setEmail] = useState("");
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
        alici: `${firstName} ${lastName}`,
        adres: adress,
        telefon: phone,
        eposta: email,
        tcno: tcNo,
        tarih: new Date().toISOString().slice(0, 10),
        fiyat: product.price.normal, 
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
                  label="E-Posta"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <Grid item xs={12}>
                <Typography>Yapı Kredi Bankası</Typography>
                <Typography variant="body2">
                  ANAFARTALAR ŞUBESİ (011)
                </Typography>
                <Typography variant="body2">
                  TR91 0006 7010 0000 0090 0985 59
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Mesafeli Satış Sözleşmesi</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p class="p1">SATICI :</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        &Uuml;nvanı{" "}
                        <span class="Apple-converted-space">&nbsp; </span>:
                        Netan End Lab. Hiz. Kim. Mak. M&uuml;h. İth. İhr. Ltd.
                        Şti.
                      </p>
                      <p class="p3">
                        Adresi : Maltepe Mahallesi GMK Bulvarı No:47/13
                        &Ccedil;ankaya, Ankara
                      </p>
                      <p class="p1">Telefon : 0 312 442 23 27</p>
                      <p class="p1">Fax : 0 312 442 23 51</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Mersis Numarası :
                        &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">ALICI:</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Adı/soyadı/Ünvanı : {firstName} {lastName}
                      </p>
                      <p class="p1">Adresi : {adress}</p>
                      <p class="p1">Telefon : {phone} </p>
                      <p class="p1">Email : {email} </p>
                      <p class="p4">VKN/TC No : {tcNo}</p>
                      <p class="p4">
                        Tarih : {date.getDate()}/{date.getMonth() + 1}/
                        {date.getFullYear()}
                      </p>
                      <p class="p5">&nbsp;</p>
                      <p class="p5">&nbsp;</p>
                      <p class="p1">&Ouml;N BİLGİLENDİRME FORMU</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        1) S&ouml;zleşme konusu mal veya hizmetin adı, adeti,
                        KDV dahil satış fiyatı, &ouml;deme şekli ve temel
                        nitelikleri
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        &Ouml;deme Şekli : Kredi Kartı/Banka Havalesi
                        (EFT&rsquo;si)/Kapıdan &Ouml;deme
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Sipariş &ouml;zeti sayfasında sipariş toplamının
                        ka&ccedil; taksitle &ouml;deneceği bilgisi
                        bulunmaktadır. Bankanız kampanyalar d&uuml;zenleyerek
                        sizin se&ccedil;tiğiniz taksit adedinin daha
                        &uuml;st&uuml;nde bir taksit adedi uygulayabilir, taksit
                        &ouml;teleme gibi hizmetler sunulabilir. Bu t&uuml;r
                        kampanyalar bankanızın inisiyatifindedir ve şirketimizin
                        bilgisi d&acirc;hilinde olması durumunda sayfalarımızda
                        kampanyalar hakkında bilgi verilmektedir. Kredi
                        kartınızın hesap kesim tarihinden itibaren sipariş
                        toplamı taksit adedine b&ouml;l&uuml;nerek kredi kartı
                        &ouml;zetinize bankanız tarafından yansıtılacaktır.
                        Banka taksit tutarlarını k&uuml;surat farklarını dikkate
                        alarak aylara eşit olarak dağıtmayabilir. Detaylı
                        &ouml;deme planınızın oluşturulması bankanız
                        inisiyatifindedir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        &Uuml;r&uuml;n Adı ve Temel Nitelikleri Adet :1 adet
                      </p>
                      <p class="p1">
                        Satış Bedeli : {product.price.normal} TL (KDV dahil
                        toplam TL)
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        2) Paketleme, kargo ve teslim masrafları SATICI
                        tarafından karşılanmaktadır. Teslimat, anlaşmalı kargo
                        şirketi aracılığı ile, ALICI'nın yukarıda belirtilen
                        adresinde elden teslim edilecektir. Teslim anında
                        ALICI'nın adresinde bulunmaması durumunda dahi Firmamız
                        edimini tam ve eksiksiz olarak yerine getirmiş olarak
                        kabul edilecektir. Bu nedenle, ALICI'nın
                        &uuml;r&uuml;n&uuml; ge&ccedil; teslim almasından
                        ve/veya hi&ccedil; teslim almamasından kaynaklanan
                        zararlardan ve giderlerden SATICI sorumlu değildir.
                        SATICI, s&ouml;zleşme konusu &uuml;r&uuml;n&uuml;n
                        sağlam, eksiksiz, siparişte belirtilen niteliklere uygun
                        ve varsa garanti belgeleri ve kullanım kılavuzları ile
                        teslim edilmesinden sorumludur.
                      </p>
                      <p class="p1">
                        3) &Uuml;r&uuml;n s&ouml;zleşme tarihinden itibaren en
                        ge&ccedil; 30 g&uuml;n i&ccedil;erisinde teslim
                        edilecektir. &Uuml;r&uuml;n&uuml;n&uuml;n teslim
                        edilmesi anına kadar t&uuml;m sorumluluk SATICI&rsquo;ya
                        aittir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        4) T&uuml;ketici (ALICI), 14 (ond&ouml;rt) g&uuml;n
                        i&ccedil;inde herhangi bir gerek&ccedil;e
                        g&ouml;stermeksizin ve cezai şart &ouml;demeksizin işbu
                        Mesafeli Satış S&ouml;zleşmesin&rsquo;den cayma hakkına
                        sahiptir. Cayma hakkı s&uuml;resi, mal teslimine ilişkin
                        iş bu s&ouml;zleşmede t&uuml;keticinin veya
                        t&uuml;ketici tarafından belirlenen
                        &uuml;&ccedil;&uuml;nc&uuml; kişinin malı teslim aldığı
                        g&uuml;n başlar. Ancak t&uuml;ketici, s&ouml;zleşmenin
                        kurulmasından malın teslimine kadar olan s&uuml;re
                        i&ccedil;inde de cayma hakkını kullanabilir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&uuml;ketici cayma hakkını kullanamayacağı durumlar:
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Malın tesliminden sonra ambalaj, bant, m&uuml;h&uuml;r,
                        paket gibi koruyucu unsurları a&ccedil;ılmış olması
                        halinde, malın iadesi sağlık ve hijyen a&ccedil;ısından
                        uygun olmadığından T&uuml;ketici cayma hakkını
                        kullanamaz.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5) T&uuml;keticilerin şikayet ve itirazları:
                        Siparişinize ve/veya siparişinize konu &uuml;r&uuml;ne
                        ve/veya şiparişinizle ilgili herhangi bir konuda
                        şikayetinizin olması halinde şikayetlerinizi yukarıda
                        belirtilen iletişim bilgileri vasıtasıyla
                        SATICI&rsquo;ya iletebilirsiniz. İletmiş olduğunuz
                        şikayet başvurularınız derhal kayıtlara alınacak,
                        yetkili birimler tarafından değerlendirilerek
                        &ccedil;&ouml;z&uuml;mlenmeye &ccedil;alışılacak ve en
                        kısa s&uuml;rede size geri d&ouml;n&uuml;ş
                        sağlanacaktır. İşbu s&ouml;zleşme ile ilgili
                        &ccedil;ıkacak ihtilaflarda; T&uuml;rk Mahkemeleri
                        yetkili olup; uygulanacak hukuk T&uuml;rk
                        Hukuku&rsquo;dur.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&uuml;rkiye Cumhuriyeti sınırları i&ccedil;erisinde
                        ge&ccedil;erli olmak &uuml;zere İş bu S&ouml;zleşme ile
                        ilgili &ccedil;ıkacak ihtilaflarda; her yıl Ticaret
                        Bakanlığı tarafından ilan edilen değere kadar olan
                        ihtilaflar i&ccedil;in T&Uuml;KETİCİ işleminin yapıldığı
                        veya T&Uuml;KETİCİ ikametgahının bulunduğu yerdeki İl
                        veya İl&ccedil;e T&uuml;ketici Hakem Heyetleri, s&ouml;z
                        konusu değerin &uuml;zerindeki ihtilaflarda ise
                        T&Uuml;KETİCİ işleminin yapıldığı veya T&Uuml;KETİCİ
                        ikametgahının bulunduğu yerdeki T&uuml;ketici
                        Mahkemeleri yetkili olacaktır.
                      </p>

                      <p class="p2">&nbsp;</p>
                      <p class="p1">MADDE 1- TARAFLAR</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">1.1. SATICI:</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        &Uuml;nvanı{" "}
                        <span class="Apple-converted-space">&nbsp; </span>:
                        Netan End Lab. Hiz. Kim. Mak. M&uuml;h. İth. İhr. Ltd.
                        Şti.
                      </p>
                      <p class="p3">
                        Adresi : Maltepe Mahallesi GMK Bulvarı No:47/13
                        &Ccedil;ankaya, Ankara
                      </p>
                      <p class="p1">Telefon :0 312 442 23 27</p>
                      <p class="p1">Fax : 0 312 442 23 51</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Mersis Numarası :
                        &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">1.2. ALICI("T&Uuml;KETİCİ"):</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Adı/soyadı/&Uuml;nvanı : {firstName} {lastName}{" "}
                      </p>
                      <p class="p1">Adresi : {adress} </p>
                      <p class="p1">Telefon : {phone} </p>
                      <p class="p1">Email :{email} </p>
                      <p class="p1">VKN : {tcNo} </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">MADDE 2- KONU</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        İşbu s&ouml;zleşmenin konusu, T&Uuml;KETİCİ'nin
                        www.netanbeauty.com internet sitesinden elektronik
                        ortamda siparişini yaptığı aşağıda nitelikleri ve satış
                        fiyatı belirtilen &uuml;r&uuml;n&uuml;n satışı ve
                        teslimi ile ilgili olarak 6502 sayılı T&uuml;keticinin
                        Korunması Hakkındaki Kanun ve Mesafeli S&ouml;zleşmeler
                        Y&ouml;netmeliği h&uuml;k&uuml;mleri gereğince
                        tarafların hak ve y&uuml;k&uuml;ml&uuml;l&uuml;klerinin
                        saptanmasıdır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        MADDE 3- S&Ouml;ZLEŞME KONUSU &Uuml;R&Uuml;N, &Ouml;DEME
                        VE TESLİMATA İLİŞKİN BİLGİLER
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        3.1- Elektronik ortamda alınan
                        &Uuml;r&uuml;n/&Uuml;r&uuml;nlerin Cinsi ve
                        t&uuml;r&uuml;, Miktarı, Modeli, Satış Bedeli,
                        &Ouml;deme Şekli, Teslim Alacak Kişi, Teslimat Adresi,
                        Fatura Bilgileri aşağıda belirtildiği gibidir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p6">
                        Alınan &Uuml;r&uuml;n/&Uuml;r&uuml;nler : 1 adet
                      </p>

                      <p class="p7">
                        Toplam Satış Bedeli {product.price.normal} TL
                      </p>
                      <p class="p7">
                        &Ouml;deme Şekli : Kredi Kartı/Banka Havalesi
                        (EFT&rsquo;si)/
                        <span class="s1">Kapıdan &Ouml;deme</span>
                      </p>
                      <p class="p7">
                        Teslim Edilecek Kişi : {firstName} {lastName}
                      </p>
                      <p class="p7">Telefon numarası : {phone}</p>
                      <p class="p7">Teslimat Adresi : {adress}</p>
                      <p class="p7">
                        Fatura Edilecek Kişi/Kurum : {firstName} {lastName}
                      </p>
                      <p class="p7">Fatura Adresi : {adress}</p>
                      <p class="p7">VKN/TC Kimlik No : {tcNo}</p>
                      <p class="p1">
                        3.2- &Ouml;deme Şekli : Kredi Kartı/Banka Havalesi
                        (EFT&rsquo;si)/Kapıdan &Ouml;deme
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Sipariş &ouml;zeti sayfasında sipariş toplamının
                        ka&ccedil; taksitle &ouml;deneceği bilgisi
                        bulunmaktadır. Bankanız kampanyalar d&uuml;zenleyerek
                        sizin se&ccedil;tiğiniz taksit adedinin daha
                        &uuml;st&uuml;nde bir taksit adedi uygulayabilir, taksit
                        &ouml;teleme gibi hizmetler sunulabilir. Bu t&uuml;r
                        kampanyalar bankanızın inisiyatifindedir ve şirketimizin
                        bilgisi d&acirc;hilinde olması durumunda sayfalarımızda
                        kampanyalar hakkında bilgi verilmektedir. Kredi
                        kartınızın hesap kesim tarihinden itibaren sipariş
                        toplamı taksit adedine b&ouml;l&uuml;nerek kredi kartı
                        &ouml;zetinize bankanız tarafından yansıtılacaktır.
                        Banka taksit tutarlarını k&uuml;surat farklarını dikkate
                        alarak aylara eşit olarak dağıtmayabilir. Detaylı
                        &ouml;deme planınızın oluşturulması bankanız
                        inisiyatifindedir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        3.3- Diğer yandan vadeli satışların sadece Bankalara ait
                        kredi kartları ile yapılması nedeniyle, T&Uuml;KETİCİ,
                        ilgili faiz oranlarını ve temerr&uuml;t faizi ile ilgili
                        bilgileri bankasından ayrıca teyit edeceğini,
                        y&uuml;r&uuml;rl&uuml;kte bulunan mevzuat
                        h&uuml;k&uuml;mleri gereğince faiz ve temerr&uuml;t
                        faizi ile ilgili h&uuml;k&uuml;mlerin Banka ve
                        T&Uuml;KETİCİ arasındaki kredi kartı s&ouml;zleşmesi
                        kapsamında uygulanacağını kabul, beyan ve taahh&uuml;t
                        eder.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">3.4 - İade Prosed&uuml;r&uuml;:</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        a) Kredi Kartı ile &Ouml;deme Se&ccedil;eneklerinde İade
                        Prosed&uuml;r&uuml;
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Alışveriş kredi kartı ile ve taksitli olarak yapılmışsa,
                        T&Uuml;KETİCİ &uuml;r&uuml;n&uuml; ka&ccedil; taksit ile
                        aldıysa Banka T&Uuml;KETİCİ'ye geri &ouml;demesini
                        taksitle yapmaktadır. SATICI bankaya &uuml;r&uuml;n
                        bedelinin tamamını tek seferde &ouml;dedikten sonra,
                        Banka poslarından yapılan taksitli harcamaların
                        T&Uuml;KETİCİ'nin kredi kartına iadesi durumunda, konuya
                        m&uuml;dahil tarafların mağdur duruma d&uuml;şmemesi
                        i&ccedil;in talep edilen iade tutarları, yine taksitli
                        olarak hamil taraf hesaplarına Banka tarafından
                        aktarılır. T&Uuml;KETİCİ'nin satış iptaline kadar
                        &ouml;demiş olduğu taksit tutarları, eğer iade tarihi
                        ile kartın hesap kesim tarihleri &ccedil;akışmazsa her
                        ay karta 1 (bir) iade yansıyacak ve T&Uuml;KETİCİ iade
                        &ouml;ncesinde &ouml;demiş olduğu taksitleri satışın
                        taksitleri bittikten sonra, iade &ouml;ncesinde
                        &ouml;demiş olduğu taksitleri sayısı kadar ay daha
                        alacak ve mevcut bor&ccedil;larından d&uuml;şm&uuml;ş
                        olacaktır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Kart ile alınmış mal ve hizmetin iadesi durumunda
                        SATICI, Banka ile yapmış olduğu s&ouml;zleşme gereği
                        T&Uuml;KETİCİ'ye nakit para ile &ouml;deme yapamaz.
                        SATICI, bir iade işlemi s&ouml;z konusu olduğunda ilgili
                        yazılım aracılığı ile iadesini yapacak olup, SATICI
                        ilgili tutarı Banka'ya nakden veya mahsuben
                        &ouml;demekle y&uuml;k&uuml;ml&uuml; olduğundan yukarıda
                        anlatmış olduğumuz prosed&uuml;r gereğince
                        T&Uuml;KETİCİ'ye nakit olarak &ouml;deme
                        yapılamamaktadır. Kredi kartına iade, SATICI'nın
                        Banka'ya bedeli tek seferde &ouml;demesinden sonra,
                        Banka tarafından yukarıdaki prosed&uuml;r gereğince
                        yapılacaktır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&Uuml;KETİCİ, bu prosed&uuml;r&uuml; okuduğunu ve kabul
                        ettiğini kabul ve taahh&uuml;t eder.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        b) Havale/EFT &Ouml;deme Se&ccedil;eneklerinde İade
                        Prosed&uuml;r&uuml;
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        İade, T&Uuml;KETİCİ'den banka hesap bilgileri istenerek,
                        T&Uuml;KETİCİ'nin belirttiği hesaba (hesabın fatura
                        adresindeki kişinin adına veya kullanıcı &uuml;yenin
                        adına olması şarttır) havale ve EFT şeklinde
                        yapılacaktır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        SATICI bankaya &uuml;r&uuml;n bedelinin tamamını tek
                        seferde geri &ouml;der.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Havale/EFT yoluyla alınmış mal ve hizmetin iadesi
                        durumunda SATICI, Banka ile yapmış olduğu s&ouml;zleşme
                        gereği T&Uuml;KETİCİ'ye nakit para ile &ouml;deme
                        yapamaz. SATICI, bir iade işlemi s&ouml;z konusu
                        olduğunda ilgili yazılım aracılığı ile iadesini yapacak
                        olup, SATICI ilgili tutarı Banka'ya nakden veya mahsuben
                        &ouml;demekle y&uuml;k&uuml;ml&uuml; olduğundan yukarıda
                        anlatmış olduğumuz prosed&uuml;r gereğince
                        T&Uuml;KETİCİ'ye nakit olarak &ouml;deme
                        yapılamamaktadır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&Uuml;KETİCİ, bu prosed&uuml;r&uuml; okuduğunu ve kabul
                        ettiğini kabul ve taahh&uuml;t eder.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">3.4- Teslimat Şekli:</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Paketleme, kargo ve teslim masrafları SATICI tarafından
                        karşılanmaktadır. Teslimat, anlaşmalı kargo şirketi
                        aracılığı ile, T&Uuml;KETİCİ'nin yukarıda belirtilen
                        adresinde elden teslim edilecektir. Teslim anında
                        T&Uuml;KETİCİ'nin adresinde bulunmaması durumunda dahi
                        Firmamız edimini tam ve eksiksiz olarak yerine getirmiş
                        olarak kabul edilecektir. Bu nedenle, T&Uuml;KETİCİ'nin
                        &uuml;r&uuml;n&uuml; ge&ccedil; teslim almasından
                        ve/veya hi&ccedil; teslim almamasından kaynaklanan
                        zararlardan ve giderlerden SATICI sorumlu değildir.
                        SATICI, s&ouml;zleşme konusu &uuml;r&uuml;n&uuml;n
                        sağlam, eksiksiz, siparişte belirtilen niteliklere uygun
                        ve varsa garanti belgeleri ve kullanım kılavuzları ile
                        teslim edilmesinden sorumludur.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">MADDE 4- CAYMA HAKKI</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&Uuml;KETİCİ , SATICI ile imzaladığı işbu Mesafeli
                        Satış S&ouml;zleşmesi'nden 14 (ond&ouml;rt) g&uuml;n
                        i&ccedil;inde herhangi bir gerek&ccedil;e
                        g&ouml;stermeksizin ve cezai şart &ouml;demeksizin cayma
                        hakkına sahiptir. Cayma hakkı s&uuml;resi, hizmet
                        ifasına ilişkin s&ouml;zleşmelerde s&ouml;zleşmenin
                        kurulduğu g&uuml;n; mal teslimine ilişkin
                        s&ouml;zleşmelerde ise T&Uuml;KETİCİ'nin veya
                        T&Uuml;KETİCİ tarafından belirlenen
                        &uuml;&ccedil;&uuml;nc&uuml; kişinin malı teslim aldığı
                        g&uuml;n başlar. Ancak T&Uuml;KETİCİ, s&ouml;zleşmenin
                        kurulmasından malın teslimine kadar olan s&uuml;re
                        i&ccedil;inde de cayma hakkını kullanabilir.
                        &Uuml;r&uuml;n iadesi i&ccedil;in, durum &ouml;ncelikli
                        olarak m&uuml;şteri hizmetlerine iletilmeli ve teslimatı
                        yapan Kargo şirketi aracılığıyla &uuml;r&uuml;n&uuml;n
                        faturası ile birlikte SATICI&rsquo;ya ulaştırılması
                        gerekmektedir<span class="s2">. </span>
                        <span class="s3">
                          T&Uuml;KETİCİ&rsquo;nin s&uuml;resi i&ccedil;erisinde
                          cayma hakkını kullanması halinde{" "}
                        </span>
                        kargo masrafları SATICI tarafından karşılanmaktadır
                        <span class="s2">.</span>
                      </p>
                      <p class="p8">&nbsp;</p>
                      <p class="p1">
                        Malın tesliminden sonra ambalaj, bant, m&uuml;h&uuml;r,
                        paket gibi koruyucu unsurların a&ccedil;ılmış olması
                        halinde, malın iadesi sağlık ve hijyen a&ccedil;ısından
                        uygun olmadığından T&uuml;ketici cayma hakkını
                        kullanamaz. Satıcıya ulaşan &uuml;r&uuml;n bu şartı
                        sağladığı takdirde iade olarak kabul edilir,
                        &ouml;demesi T&Uuml;KETİCİ&rsquo;nin belirttiği hesaba
                        (hesabın fatura adresindeki kişinin adına olması
                        şarttır) havale ve EFT şeklinde yapılacaktır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">MADDE 5- GENEL H&Uuml;K&Uuml;MLER</p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.1- 18 yaşından k&uuml;&ccedil;&uuml;k kişiler
                        www.netanbeauty.com&rsquo;dan alış-veriş yapamaz.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.2. T&Uuml;KETİCİ, İnternet Sitesi'nde s&ouml;zleşme
                        konusu &uuml;r&uuml;ne ilişkin &ouml;n bilgileri okuyup
                        bilgi sahibi olduğunu ve elektronik ortamda gerekli
                        teyidi verdiğini beyan eder.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.3- &Uuml;r&uuml;n s&ouml;zleşme tarihinden itibaren en
                        ge&ccedil; 30 g&uuml;n i&ccedil;erisinde teslim
                        edilecektir. &Uuml;r&uuml;n&uuml;n&uuml;n teslim
                        edilmesi anına kadar t&uuml;m sorumluluk SATICI'ya
                        aittir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.4- S&ouml;zleşme konusu &uuml;r&uuml;n,
                        T&Uuml;KETİCİ'den başka bir kişi/kuruluşa teslim
                        edilecek ise, teslim edilecek kişi/kuruluşun teslimatı
                        kabul etmemesinden SATICI sorumlu tutulamaz.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.5- SATICI, s&ouml;zleşme konusu &uuml;r&uuml;n&uuml;n
                        sağlam, eksiksiz, siparişte belirtilen niteliklere uygun
                        ve varsa garanti belgeleri ve kullanım kılavuzları ile
                        teslim edilmesinden sorumludur.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.6- S&ouml;zleşme konusu &uuml;r&uuml;n&uuml;n
                        teslimatı i&ccedil;in işbu s&ouml;zleşmenin bedelinin
                        T&Uuml;KETİCİ'nin tercih ettiği &ouml;deme şekli ile
                        &ouml;denmiş olması şarttır. Herhangi bir nedenle
                        &uuml;r&uuml;n bedeli &ouml;denmez veya banka
                        kayıtlarında iptal edilir ise, SATICI
                        &uuml;r&uuml;n&uuml;n teslimi
                        y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;nden kurtulmuş kabul
                        edilir.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        5.7- Garanti Koşulları: Alınan &uuml;r&uuml;nlerin
                        garanti bilgilerine m&uuml;şteri tarafından alımdan
                        &ouml;nce dikkat edilmelidir. Aldığınız
                        &uuml;r&uuml;nlerin garanti koşulları
                        ithalat&ccedil;ı/&uuml;retici firma tarafından
                        sağlanmaktadır. &Uuml;r&uuml;nlerle gelen &uuml;r&uuml;n
                        kılavuzlarını mutlaka okuyunuz ve teknik destek danışma
                        hattını arayıp bilgi alınız.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Garanti belgesi ile satılan &uuml;r&uuml;nlerden olan
                        &uuml;r&uuml;nlerin ayıplı (arızalı, bozuk vb.) olması
                        halinde veya garanti kapsamında ve şartları dahilinde
                        arızalanması veya bozulması halinde gerekli onarımın
                        yetkili servise yaptırılması i&ccedil;in s&ouml;z konusu
                        &uuml;r&uuml;nler SATICI'ya g&ouml;nderilebilir,{" "}
                        <span class="s3">
                          kargo giderleri T&Uuml;KETİCİ tarafından
                          karşılanacaktır.
                        </span>
                      </p>
                      <p class="p5">&nbsp;</p>
                      <p class="p1">MADDE 6- UYUŞMAZLIK VE YETKİLİ MAHKEME</p>
                      <p class="p1">
                        İşbu s&ouml;zleşme ile ilgili &ccedil;ıkacak
                        ihtilaflarda; T&uuml;rk Mahkemeleri yetkili olup;
                        uygulanacak hukuk T&uuml;rk Hukuku'dur.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        T&uuml;rkiye Cumhuriyeti sınırları i&ccedil;erisinde
                        ge&ccedil;erli olmak &uuml;zere her yıl Ticaret
                        Bakanlığı tarafından ilan edilen değere kadar olan
                        ihtilaflar i&ccedil;in T&Uuml;KETİCİ işleminin yapıldığı
                        veya T&Uuml;KETİCİ ikametgahının bulunduğu yerdeki İl
                        veya İl&ccedil;e T&uuml;ketici Hakem Heyetleri, s&ouml;z
                        konusu değerin &uuml;zerindeki ihtilaflarda ise
                        T&Uuml;KETİCİ işleminin yapıldığı veya T&Uuml;KETİCİ
                        ikametgahının bulunduğu yerdeki T&uuml;ketici
                        Mahkemeleri Yetkili olacaktır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        Siparişin ger&ccedil;ekleşmesi durumunda T&Uuml;KETİCİ
                        işbu s&ouml;zleşmenin t&uuml;m koşullarını kabul etmiş
                        sayılır.
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        SATICI : Netan End Lab. Hiz. Kim. Mak. Müh. İth. İhr.
                        Ltd. Şti.
                        <span class="Apple-converted-space">&nbsp;</span>
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p1">
                        ALICI(""T&Uuml;KETİCİ"") : {firstName} {lastName}
                      </p>
                      <p class="p2">&nbsp;</p>
                      <p class="p4">
                        Tarih : {date.getDate()}/{date.getMonth() + 1}/
                        {date.getFullYear()}
                      </p>
                      <p class="p5">&nbsp;</p>
                      <p class="p5">&nbsp;</p>
                      <p class="p5">&nbsp;</p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
