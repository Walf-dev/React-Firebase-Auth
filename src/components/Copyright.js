import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Walf-dev/sweetTasks"
        target="_blank"
      >
        sweetTasks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
