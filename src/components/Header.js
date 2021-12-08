import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Grid,
} from "@material-ui/core";
import { UserContext, DispatchUserContext } from "../state/contexts/contexts";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { Layout, Radio } from "antd";
import { useTranslation } from "react-i18next";

//to store chosen language in cookies
import Cookies from "js-cookie";
import InstallPWA from "./InstallPWA";

export default function Header() {
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const dispatch = useContext(DispatchUserContext);
  const history = useHistory();
  const [language, setLanguage] = useState(Cookies.get("locale") || "en");
  console.log(language)
  const { t, i18n } = useTranslation();

  function changeLanguage(e) {
    //target the chosen language onclick
    const code = e.target.value;

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      Cookies.set("locale", code);
      setLanguage(code);
    }
  }

  const handleOpenUserMenu = (e) => {
    setUserAnchorEl(e.currentTarget);
  };
  const handleCloseUserMenu = (e) => {
    setUserAnchorEl(null);
  };
  const handleOpenLangMenu = (e) => {
    setLangAnchorEl(e.currentTarget);
  };
  const handleCloseLangMenu = (e) => {
    setLangAnchorEl(null);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: "USER_LOGOUT" });
        history.push("/sign-in");
        // history.push(`${process.env.PUBLIC_URL}/sign-in`);
      })
      .catch((err) => alert(err));
  };

  const { user, isLoading } = useContext(UserContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs />
          {/*lang session */}
          <InstallPWA/>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOpenLangMenu}
            onClose={handleCloseLangMenu}
          >
            {t("language")}
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={langAnchorEl}
            open={Boolean(langAnchorEl)}
            onClose={handleCloseLangMenu}
          >
          <Radio.Group defaultValue={language} onChange={changeLanguage}>
          <MenuItem><Radio.Button value="en">English</Radio.Button></MenuItem>
          <MenuItem><Radio.Button value="fr">Francais</Radio.Button></MenuItem>
          </Radio.Group>
          </Menu>
          {/*end lang session */}

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOpenUserMenu}
            onClose={handleCloseUserMenu}
          >
            <Avatar src={user && user.photoURL}></Avatar>
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={userAnchorEl}
            open={Boolean(userAnchorEl)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
