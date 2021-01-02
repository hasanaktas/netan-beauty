import React from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core";

const AboutPage = () => {
  return (
    <Box
      bgcolor="white"
      paddingY={5}
      paddingX={1}
      height="100%"
      minHeight={500}
    >
      <Container>
        <Grid
          container
          spacing={4}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid item sm={12} md={5}>
            <Typography variant="h4" gutterBottom>
              HAKKIMIZDA
            </Typography>
            <Box>
              <Typography>
                NETAN, Tahribatsız Muayene, Endüstriyel Güvenlik ve Tren
                Teknoloji Sistemleri , otomotiv, enerji, demir çelik ve döküm
                endüstrisi gibi sektörlere; ürün, sistem ve çözüm hizmetleri
                sunmaktadır. Tecrübesi ve her gün yenilenen teknolojisiyle
                beraber kendini sürekli geliştiren firmamız sizlere kaliteli
                hizmet ayrıcalığını, en iyi teknolojiyi ve daha birçok günümüz
                teknolojisine paralel hizmetleri ile sunar. NETAN Tahribatsız
                Muayene birimi ile sektörünün dünyada öncü firmalarını
                Türkiye’de ve Asya Ülkeleri’nde başarılı bir şekilde temsil
                ederek standartlara uygun cihaz, donanım ve mühendislik
                çözümlerini müşteri odaklı sunmaktadır. Firmamız dünyanın önde
                gelen test ve analiz cihazlarını ihtiyaçlarınız doğrultusunda
                belirleyerek istenmesi durumunda kiralık olarak hizmetinize
                sunmaktadır. 2012 yılında kurulan firmamız; Başarının, ancak
                müşteri beklentilerini karşılamak ile mümkün olduğunu benimseyen
                profesyonel bir çalışma yapısına sahiptir.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ marginTop: "40px" }}>
            <Box borderRadius={10} margin={0} padding={2} bgcolor="#F6D1EF">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  title="introVideo"
                  width="565"
                  height="345"
                  src="https://www.youtube.com/embed/IEI3OUxDyHQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
