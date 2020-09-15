import React from "react";
import { Global } from "@emotion/core";
import globalStyle from "../../utils/globalStyle";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);
