import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import {
  Typography,
  Card,
  CardContent,
  Container,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { UserContext } from "../../state/contexts/contexts";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState("Full name");
  const [email, setEmail] = useState("Email");
  const [photoURL, setPhotoURL] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (user && user.displayName) {
      setName(user.displayName);
    }
    if (user && user.email) {
      setEmail(user.email);
    }
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  return (
    <React.Fragment>
{  name ?   
  <div>
  <Header />
      <Container maxWidth="md">
        <Card>
          <CardHeader
            avatar={<Avatar src={photoURL}></Avatar>}
            title={name}
            subheader={email}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            {t("title")} :)
            {t("content.description")}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      </div>
: null
}  
</React.Fragment>  
  );
}

export default Dashboard;
