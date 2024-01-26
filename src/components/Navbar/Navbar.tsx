import { FC } from "react";
import "./Navbar.css";
import { Typography, Link } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Speed from "@mui/icons-material/Speed";

interface NavbarProps {
  isLogged: boolean;
}

const Navbar: FC<NavbarProps> = ({ isLogged }) => {
  return (
    <header className="navbar-container">
      <Link href="/" underline="none">
        <Typography variant="h5" color="white" sx={{ paddingLeft: "3vw" }}>
          Monitoring App
        </Typography>
      </Link>
      {isLogged ? (
        <div className="navbar-links">
          <div>
            <Link href="/manage-status-page" underline="none">
              <MenuIcon sx={{ color: "#b1b8c0" }} />
              <Typography color="#b1b8c0">Status Pages</Typography>
            </Link>
          </div>
          <div>
            <Link href="/dashboard" underline="none">
              <Speed />
              <Typography color="black">Dashboard</Typography>
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Navbar;
