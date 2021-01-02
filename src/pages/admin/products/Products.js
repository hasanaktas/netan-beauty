import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  CardHeader,
  Divider,
  CardContent,
  IconButton,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import { Page } from "components";
import { useProducts, useSnack } from "hooks";

const AdminProductPage = () => {
  let navigate = useNavigate();
  const { error, products } = useProducts();
  const snack = useSnack();

  if (error) {
    snack("HATA", "error");
    return <div>HATA!!!</div>;
  }

  return (
    <Page title="Netan Beauty">
      <Container>
        <Card>
          <CardHeader
            subheader="Ürün ekle veya düzenle"
            title="Ürünler"
            action={
              <IconButton onClick={() => navigate(`/admin/product/new`)}>
                <AddIcon />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <List>
              {products.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    button
                    onClick={() => navigate(`/admin/product/${item.seoUrl}`)}
                  >
                    <ListItemText primary={item.name.tr} />
                    <EditIcon />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default AdminProductPage;
