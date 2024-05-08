import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MobileLinksDrawer from "./MobileLinksDrawer";
import MenuIcon from "./Icons/MenuIcon";
import CartIcon from "./Icons/CartIcon";
import LogoIcon from "./Icons/LogoIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };

  return (
    <header>
      <nav>
        <section className="left">
          <div className="imgs">
            <IconButton
              disableRipple
              onClick={() => {
                handleOpen(true);
              }}
            >
              <MenuIcon fillColor={"#68707d"} />
            </IconButton>
            <MobileLinksDrawer onHandleOpen={handleOpen} onOpen={open} />
            <IconButton>
              <LogoIcon fillColor={"#D03F20"}/>
            </IconButton>
          </div>
          <div className="links hide-in-mobile">
            <ul>
              <li>
                <button>Collections</button>
              </li>
              <li>
                <button>Laptops</button>
              </li>
              <li>
                <button>Mobiles</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </section>
        <div className="right">
          <IconButton
            disableRipple
          >
          <CartIcon />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
