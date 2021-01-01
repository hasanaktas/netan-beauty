import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Page } from "components";
import { signIn } from "actions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    minHeight: "100vh",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LoginView = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("hmyazilim06@gmail.com");

  const [password, setPassword] = useState("HMsoftware35");
  const login = () => {
    signIn(email, password)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography color="textPrimary" variant="h2">
              Giriş Yap
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Yönetim Paneline Giriş Yap
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="E-posta"
            margin="normal"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Parola"
            margin="normal"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="outlined"
          />
          <Box my={2}>
            <Button
              color="primary"
              fullWidth
              size="large"
              onClick={login}
              variant="contained"
            >
              GİRİŞ YAP
            </Button>
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
