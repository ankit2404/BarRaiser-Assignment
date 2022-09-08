import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const Navbar = ({ history }) => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const toTree = () => {
    navigate("/tree");
  };
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="outlined"
            onClick={toHome}
            style={{
              marginRight: "30px",
              borderColor: "white",
              color: "white",
            }}
          >
            Bar Raiser
          </Button>
          <Button
            variant="outlined"
            onClick={toTree}
            style={{
              marginRight: "30px",
              borderColor: "white",
              color: "white",
            }}
          >
            Tree
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
